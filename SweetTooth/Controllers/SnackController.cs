using Microsoft.AspNetCore.Mvc;
using SweetTooth.DataAccess;
using SweetTooth.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Controllers
{
    [Route("api/snack")]
    [ApiController]
    public class SnackController : ControllerBase
    {
        SnackRepo _repo;

        public SnackController(SnackRepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllSnacks()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet]
        public IActionResult GetSnackById(Guid id)
        {
            var snack = _repo.GetById(id);

            if (snack == null)
            {
                return NotFound($"No snack with the id {id} was found.");
            }

            return Ok(snack);
        }

        [HttpPost]
        public IActionResult AddSnack(Snack newSnack)
        {
            if (string.IsNullOrEmpty(newSnack.Name))
            {
                return BadRequest("Name is required");
            }

            _repo.Add(newSnack);

            return Created($"/api/snack//{newSnack.Id}", newSnack);
        }
    }
}
