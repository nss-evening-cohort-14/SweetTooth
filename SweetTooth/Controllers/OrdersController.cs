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
    public class OrdersController : ControllerBase
    {
        OrderRepo _repo;

        public OrdersController(OrderRepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllOrders()
        {
            return Ok(_repo.GetAll());
        }
    }
}
