using Dapper;
using Microsoft.Extensions.Configuration;
using SweetTooth.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.DataAccess
{
    public class OrderRepo
    {
        string _connectionString;

        public OrderRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SweetTooth");
        }

        internal IEnumerable<Order> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select * 
                        from [Order]";

            var orders = db.Query<Order>(sql);

            return orders;
        }

        public IEnumerable<OrderItem> GetOrderItems(Guid orderId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select * 
                        from OrderItem
                        where OrderId = @id";

            var orderItems = db.Query<OrderItem>(sql, new { id = orderId });

            return orderItems;
        }

        internal Order GetSingleOrder(Guid orderId)
        {

            using var db = new SqlConnection(_connectionString);

            var sql = @"select * 
                        from [Order] o
	                        join PaymentMethod p
	                        on p.Id = o.PaymentMethodId
                        where o.Id = @id";

            var orderItemsSql = @"select * 
                                from OrderItem
                                where OrderId = @id";

            var orderItems = db.Query<OrderItem>(orderItemsSql, new { id = orderId });

            var orders = db.Query<Order, PaymentMethod, Order>(sql, Map, new { id = orderId }, splitOn: "Id");

            var order = orders.FirstOrDefault();
            order.OrderItems = orderItems;

            return order;
        }

        internal int GenerateNumber()
        {
            Random generator = new Random();
            int r = generator.Next(100000, 1000000);

            return r;
        }

        internal void Add(Order newOrder, List<Item> snackList)
        {

            using var db = new SqlConnection(_connectionString);

            var orderSql = @"insert into [dbo].[Order]
                        (UserId,
                        OrderDate,
                        OrderNumber,
                        Total,
                        PaymentMethodId,
                        Processed,
                        Shipped)
                        Output inserted.Id
                        values (@UserId,
		                        @OrderDate,
		                        @OrderNumber,
		                        @Total,
		                        @PaymentMethodId,
		                        @Processed,
		                        @Shipped)";

            var orderItemsSql = @"insert into [dbo].[OrderItem]
                                (OrderId, SnackId, Quantity)
                                Output inserted.Id
                                values (@OrderId, @SnackId, @Quantity)";

            var orderParams = new
            {
                UserId = newOrder.UserId,
                OrderDate = DateTime.Now,
                OrderNumber = GenerateNumber(),
                Total = newOrder.Total,
                PaymentMethodId = newOrder.PaymentMethodId,

                // setting those to false because the order could just be in the cart. Will need seperate
                // calls to process order and ship.
                Processed = newOrder.Processed,
                Shipped = newOrder.Processed,
            };


            var orderId = db.ExecuteScalar<Guid>(orderSql, orderParams);
            newOrder.Id = orderId;

            // Creating an orderItem for each snack inputed by user.

            foreach (var snack in snackList)
            {
                var itemParams = new
                {
                    OrderId = newOrder.Id,
                    SnackId = snack.SnackId,
                    Quantity = snack.Quantity
                };
                db.ExecuteScalar<Guid>(orderItemsSql, itemParams);
            }
        }

        internal void ProcessOrder(Order order)
        {
            // function to process order once in cart. 
            // update processed propety and orderDate
        }

        internal void ShipOrder(Order order)
        {
            // function to ship order when owner clicks ship button
        }

        Order Map(Order order, PaymentMethod paymentMethod)
        {
            order.PaymentMethod = paymentMethod;
            return order;
        }
    }
}

