using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SweetTooth.DataAccess;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SweetTooth.Models
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private UserRepo _repo;

        public UsersController(UserRepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public string GetSingleUser(Guid id)
        {
            return "value";
        }

        [HttpPost]
        public IActionResult AddUser(User newUser)
        {
            if (string.IsNullOrEmpty(newUser.FirstName) || string.IsNullOrEmpty(newUser.LastName))
            {
                return BadRequest("Name is required");
            }

            _repo.Add(newUser);

            return Created($"api/users/{newUser.Id}", newUser);
            //refactor this response ^^ once I create GetSingleUser
        }
    }
}
