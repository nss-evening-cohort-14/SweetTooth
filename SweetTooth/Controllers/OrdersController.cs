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
        SnackRepo _snackRepo;
        PaymentMethodRepo _pmRepo;
        UserRepo _userRepo;

        User CurrentUser => _userRepo.GetUserByUid(User.FindFirst((claim) => claim.Type == "user_id").Value);

        public OrdersController(OrderRepo repo,
            SnackRepo snackRepo,
            PaymentMethodRepo pmRepo,
            UserRepo userRepo)
        {
            _repo = repo;
            _snackRepo = snackRepo;
            _pmRepo = pmRepo;
            _userRepo = userRepo;
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
        public IActionResult AddOrder(CreateOrderCommand command)
        {
            var _order = command.Order;
            var _snacks = command.SnackIdQuantityList;

            decimal calculateTotal = 0;

            _snacks.ForEach(snack =>
            {
                var foundSnack = _snackRepo.GetById(snack.SnackId);
                calculateTotal += (foundSnack.Price * snack.Quantity);
            });

            _order.Total = calculateTotal;

            _repo.Add(_order, _snacks);

            return Created($"/api/orders/{_order.Id}", _order);
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

        [HttpPut("processOrder/{id}")]
        public IActionResult ProcessOrder(Guid id)
        {
            var orderToProcess = _repo.GetSingleOrder(id);

            if (orderToProcess == null)
            {
                return NotFound("No order was found.");
            }

            orderToProcess.Processed = !orderToProcess.Processed;

            var processOrder = _repo.ProcessOrder(id, orderToProcess);

            return Ok(processOrder);
        }

        [HttpPut("shipOrder/{id}")]
        public IActionResult ShipOrder(Guid id)
        {
            var orderToShip = _repo.GetSingleOrder(id);

            if (orderToShip == null)
            {
                return NotFound("No order was found.");
            }

            orderToShip.Shipped = !orderToShip.Shipped;

            var shipOrder = _repo.ProcessOrder(id, orderToShip);

            return Ok(shipOrder);
        }

        [HttpPut("updateOrder/{id}")]
        public IActionResult UpdateOrder(Guid id, Order order)
        {
            var orderToUpdate = _repo.GetSingleOrder(id);

            if (orderToUpdate == null)
            {
                return NotFound("No order was found.");
            }

            var updateOrder = _repo.UpdateOrder(id, order);

            return Ok(updateOrder);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(Guid id)
        {
            var order = _repo.GetSingleOrder(id);

            if (order.Processed == true)
            {
                return BadRequest("Processed orders cannot be deleted.");
            }

            _repo.DeleteOrder(id);

            return Ok();
        }

        [HttpDelete("orderItems/{id}")]
        public IActionResult DeleteOrderItems(Guid id)
        {
            _repo.DeleteOrderItems(id);
            return Ok();
        }

        [HttpPost("orderItems")]
        public IActionResult AddOrderItem(OrderItem item)
        {
            _repo.AddOrderItem(item);
            return Created($"/api/orders/{item.Id}", item);
        }

        [HttpGet("user/{userId}")]
        public IActionResult GetOrderByUserId(Guid userId)
        {
            var order = _repo.GetOrderByUserId(userId);
            if (order == null)
            {
                return NotFound("No order was found.");
            }
            return Ok(order);
        }

        [HttpGet("unprocessed/{userId}")]
        public IActionResult GetUnprocessedOrderByUserId(Guid userId)
        {
            var order = _repo.GetUnprocessedOrderByUserId(userId);
            if (order == null)
            {
                var userPm = _pmRepo.GetAllUserPaymentMethods(userId);
                var singlePm = userPm.First().Id;

                var newOrder = new Order()
                {
                    UserId = userId,
                    PaymentMethodId = singlePm
                };

                _repo.AddEmptyOrder(newOrder);
            };

            return Ok(order);
        }

        [HttpPost("emptyOrder")]
        public IActionResult AddEmptyOrder()
        {
            var userPm = _pmRepo.GetAllUserPaymentMethods(CurrentUser.Id);
            var singlePm = userPm.First().Id;

            var newOrder = new Order()
            {
                UserId = CurrentUser.Id,
                PaymentMethodId = singlePm
            };

            _repo.AddEmptyOrder(newOrder);

            return Created($"/api/orders/emptyOrder/{newOrder.Id}", newOrder);
        }
    }
}
