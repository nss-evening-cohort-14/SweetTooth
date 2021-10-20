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
    [Route("api/orders")]
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

        [HttpGet("{orderId}")]
        public IActionResult GetSingleOrder(Guid orderId)
        {
            var order = _repo.GetSingleOrder(orderId);

            if (order == null)
            {
                return NotFound("Order was not found.");
            }

            return Ok(order);
        }

        [HttpPost]
        public IActionResult AddOrder(Order newOrder)
        {
            _repo.Add(newOrder);

            return Created($"/api/orders/{newOrder.Id}", newOrder);
        }
    }
}
