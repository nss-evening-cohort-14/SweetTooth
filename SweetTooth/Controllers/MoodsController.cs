﻿using Microsoft.AspNetCore.Http;
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

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            var mood = _repo.GetById(id);
            if (mood == null)
            {
                return NotFound($"No mood with the id {id} was found.");
            }
            return Ok(mood);
        }

        [HttpPost]
       public IActionResult AddMood(Mood newMood)
        {
            if (string.IsNullOrEmpty(newMood.Name))
            {
                return BadRequest("Name is a required field.");
            }
            _repo.Add(newMood);

            return Created($"/api/moods/{newMood.Id}", newMood);
        } 
    }
}
