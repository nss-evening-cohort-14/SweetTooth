using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SweetTooth.DataAccess;

namespace SweetTooth.Models
{
    [Route("api/Users")]
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
        public IActionResult GetUserById(Guid id)
        {
            var singleUser = _repo.GetById(id);

            if (singleUser == null)
            {
                return NotFound($"No user found with this ID: {id}.");
            }

            return Ok(singleUser);
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
        }

        //UserAddress calls only
        [HttpPost]
        public IActionResult AddUserAddress(UserAddress newAddress)
        {
            if (string.IsNullOrEmpty(newAddress.Street) 
                || string.IsNullOrEmpty(newAddress.City) 
                || string.IsNullOrEmpty(newAddress.State)
                || string.IsNullOrEmpty(newAddress.Zip)
                )
            {
                return BadRequest("Field is required.");
            }

            _repo.AddAddress(newAddress);
            return Created($"api/users/address/{newAddress.Id}", newAddress);
        }
    }
}
