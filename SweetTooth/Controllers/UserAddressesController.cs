using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SweetTooth.DataAccess;
using SweetTooth.Models;

namespace SweetTooth.Controllers
{
    [Route("api/UserAddresses")]
    [ApiController]
    [Authorize]

    public class UserAddressesController : ControllerBase
    {
        private UserAddressRepo _repo;
        private readonly UserRepo _userRepo;

        User CurrentUser =>  _userRepo.GetUserByUid(User.FindFirst((claim) => claim.Type == "user_id").Value);

        public UserAddressesController(UserAddressRepo repo, UserRepo userRepo)
        {
            _repo = repo;
            _userRepo = userRepo;
        }

        [HttpGet]
        public IActionResult GetAllAddresses()
        {
            return Ok(_repo.GetAll());

        }

        [HttpGet("userId/{userId}")]
        public IActionResult GetAllUserAddresses(Guid userId)
        {
            var addresses = _repo.GetByUserId(userId);

            if (addresses == null)
            {
                return NotFound($"No user with the id {userId} was found.");
            }

            return Ok(addresses);
        }

        [HttpGet("{id}")]
        public IActionResult GetUserAddressById(Guid id)
        {
            var singleUserAddress = _repo.GetByAddressId(id);

            if (singleUserAddress == null)
            {
                return NotFound($"No addresses found for this User ID: {id}. Input a User ID only.");
            }

            return Ok(singleUserAddress);
        }

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

            newAddress.UserId = CurrentUser.Id;

            _repo.AddAddress(newAddress);
            return Created($"api/users/address/{newAddress.Id}", newAddress);
        }

        [HttpDelete("{id}")]
        public IActionResult HardDeleteUserAddress(Guid id)
        {
            _repo.DeleteAddress(id);

            return Ok();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUserAddress(Guid id, UserAddress userAddress)
        {
            var userAddressToUpdate = _repo.GetByAddressId(id);

            if (userAddressToUpdate == null)
                return NotFound($"Could not find a user Address with the ID: {id} to update.");

            var updatedUserAddress = _repo.UpdateAddress(id, userAddress);

            return Ok(updatedUserAddress);
        }


    }
}
