using Microsoft.AspNetCore.Mvc;
using SweetTooth.DataAccess;
using SweetTooth.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Controllers
{
    [Route("api/paymentMethod")]
    [ApiController]
    public class PaymentMethodController : ControllerBase
    {
        PaymentMethodRepo _repo;

        public PaymentMethodController(PaymentMethodRepo repo)
        {
            _repo = repo;
        }

        [HttpGet("userId/{userId}")]
        public IActionResult GetAllUserPaymentMethods(Guid userId)
        {
            var methods = _repo.GetAllUserPaymentMethods(userId);

            if (methods == null)
            {
                return NotFound($"No user with the id {userId} was found.");
            }

            return Ok(methods);
        }

        [HttpGet("paymentId/{paymentId}")]
        public IActionResult GetById(Guid paymentId)
        {
            var method = _repo.GetById(paymentId);

            if (method == null)
            {
                return NotFound($"No payment with the id {paymentId} was found.");
            }

            return Ok(method);
        }

        [HttpPost]
        public IActionResult AddPaymentMethod(PaymentMethod newMethod)
        {
            if (newMethod.UserId == Guid.Empty || string.IsNullOrEmpty(newMethod.Method) || string.IsNullOrEmpty(newMethod.CardNumber) || string.IsNullOrEmpty(newMethod.ExpDate) || string.IsNullOrEmpty(newMethod.SecurityCode))
            {
                return BadRequest("All fields are required");
            }

            if (!(newMethod.CardNumber.Length == 16) || !(newMethod.ExpDate.Length == 4) || (newMethod.SecurityCode.Length > 4) || (newMethod.SecurityCode.Length < 3))
            {
                return BadRequest("CardNumber must be length 16, ExpDate must be length 4, or SecurityCode must be length 3 or 4.");
            }
            _repo.Add(newMethod);

            return Created($"/api/paymentMethod/{newMethod.Id}", newMethod);

        }

        [HttpPut("softDelete/{id}")]
        public IActionResult ToggleSoftDelete(Guid id)
        {
            var paymentMethodToUpdate = _repo.GetById(id);

            if (paymentMethodToUpdate == null)
            {
                return NotFound($"Could not find payment method with the id {id} for updating");
            }

            paymentMethodToUpdate.SoftDelete = !paymentMethodToUpdate.SoftDelete;

            var updatedPaymentMethod = _repo.ToggleSoftDelete(id, paymentMethodToUpdate);

            return Ok(updatedPaymentMethod);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSnack(Guid id, PaymentMethod paymentMethod)
        {
            var paymentMethodToUpdate = _repo.GetById(id);

            if (paymentMethodToUpdate == null)
            {
                return NotFound($"Could not find payment method with the id {id} for updating");
            }

            var updatedPaymentMethod = _repo.Update(id, paymentMethod);

            return Ok(updatedPaymentMethod);
        }
    }
}
