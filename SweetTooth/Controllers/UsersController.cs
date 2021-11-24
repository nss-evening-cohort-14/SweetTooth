using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SweetTooth.DataAccess;
namespace SweetTooth.Models
{
    [Route("api/Users")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private UserRepo _repo;

        public UsersController(UserRepo repo)
        {
            _repo = repo;
        }

        [AllowAnonymous]
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
        [AllowAnonymous]
        [HttpPost]
        public IActionResult AddUser(User newUser)
        {
            //var fbUserId = User.FindFirst(claim => claim.Type == "user_id").Value;

            if (string.IsNullOrEmpty(newUser.FirstName) || string.IsNullOrEmpty(newUser.LastName))
            {
                return BadRequest("Name is required");
            }

            _repo.Add(newUser);

            return Created($"api/users/{newUser.Id}", newUser);
        }

        [AllowAnonymous]
        [HttpPut("{id}")]
        public IActionResult UpdateUser(Guid id, User user)
        {
            var userToUpdate = _repo.GetById(id);

            if (userToUpdate == null)
                return NotFound($"Could not find a User with the ID: {id} to update.");

            var updatedUser = _repo.UpdateUser(id, user);

            return Ok(updatedUser);
        }

        [HttpPut("softDelete/{id}")]
        public IActionResult SoftDeleteUser(Guid id)
        {
            var userToSoftDelete = _repo.GetById(id);

            if (userToSoftDelete == null)
                return NotFound($"Could not find a User with the ID: {id} to delete.");

            userToSoftDelete.SoftDelete = !userToSoftDelete.SoftDelete;

            return Ok(userToSoftDelete);
        }

        [AllowAnonymous]
        [HttpGet("user/{firebaseId}")]
        public IActionResult GetUserByUid(string firebaseId)
        {
            var user = _repo.GetUserByUid(firebaseId);

            if (user == null)
            {
                return NotFound("there are no users with this uid.");
            }

            return Ok(user);
        }

    }
}
