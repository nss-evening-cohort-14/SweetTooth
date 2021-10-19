using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SweetTooth.DataAccess;
using SweetTooth.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoodsController : ControllerBase
    {
        MoodRepo _repo;

        public MoodsController(MoodRepo repo)
        {
            _repo = repo;
        }

       [HttpGet]
       public IActionResult GetAllMoods()
       {
            return Ok(_repo.GetAll());
       }

        [HttpPost]
       public IActionResult AddMood(Mood newMood)
        {
            if (string.IsNullOrEmpty(newMood.Name))
            {
                return BadRequest("Name is a required field.");
            }

            return Created($"/api/moods/{newMood.Id}", newMood);
        } 
    }
}
