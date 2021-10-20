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

        [HttpGet("{userId}")]
        public IActionResult GetAllUserPaymentMethods(Guid userId)
        {
            var methods = _repo.GetAllUserPaymentMethods(userId);

            if (methods == null)
            {
                return NotFound($"No user with the id {userId} was found.");
            }

            return Ok(methods);
        }

        [HttpGet("{paymentId}")]
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

            _repo.Add(newMethod);

            return Created($"/api/paymentMethod/{newMethod.Id}", newMethod);

        }
    }
}
