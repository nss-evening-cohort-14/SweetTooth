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

        [HttpGet("mood/{moodId}")]
        public IActionResult GetSnacksByMood(Guid moodId)
        {
            var snacksByMood = _repo.GetAllByMood(moodId);
            return Ok(snacksByMood);
        }

        [HttpGet("category")]
        public IActionResult GetSnacksByCategory(string category)
        {
            var snacksByCategory = _repo.GetAllByCategory(category);
            return Ok(snacksByCategory);
        }

        [HttpGet("{id}")]
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
            if (string.IsNullOrEmpty(newSnack.Name) || string.IsNullOrEmpty(newSnack.Category) || (newSnack.Price == 0) || string.IsNullOrEmpty(newSnack.Description) || string.IsNullOrEmpty(newSnack.Image))
            {
                return BadRequest("All fields are required, or Price can't be 0.");
            }

            _repo.Add(newSnack);

            return Created($"/api/snack/{newSnack.Id}", newSnack);
        }

        [HttpPut("softDelete/{id}")]
        public IActionResult ToggleSoftDelete(Guid id)
        {
            var snackToUpdate = _repo.GetById(id);

            if (snackToUpdate == null)
            {
                return NotFound($"Could not find snack with the id {id} for updating");
            }

            snackToUpdate.SoftDelete = !snackToUpdate.SoftDelete;

            var updatedSnack = _repo.ToggleSoftDelete(id, snackToUpdate);

            return Ok(updatedSnack);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSnack(Guid id, Snack snack)
        {
            var snackToUpdate = _repo.GetById(id);

            if (snackToUpdate == null)
            {
                return NotFound($"Could not find snack with the id {id} for updating");
            }

            var updatedSnack = _repo.Update(id, snack);

            return Ok(updatedSnack);
        }
    }
}
