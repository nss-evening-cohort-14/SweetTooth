using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SweetTooth.DataAccess;
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
    }
}
