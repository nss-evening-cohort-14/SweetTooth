using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SweetTooth.DataAccess;
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

        [HttpGet("{orderId}/orderItems")]
        public IActionResult GetOrderItems(Guid orderId)
        {
             var orderItems = _repo.GetOrderItems(orderId);

            if (orderItems == null)
            {
                return NotFound("No items were found for this order.");
            }

            return Ok(orderItems);
        }
    }
}
