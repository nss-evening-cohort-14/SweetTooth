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

            var orderItemsSql = @"select * 
                                from OrderItem ot
                                join Snack s
                                on ot.SnackId = s.Id
                                where OrderId = @id";

            var orderItems = db.Query<OrderItem, Snack, OrderItem>(orderItemsSql, MapOrderItem, new { id = orderId }, splitOn: "Id");

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

        internal IEnumerable<Order> GetOrderByUserId(Guid userId)
        {

            using var db = new SqlConnection(_connectionString);

            var sql = @"select * 
                        from [Order] o
                        where o.UserId = @userId";

            var orders = db.Query<Order>(sql, new { userId = userId });

            //var orderItemsSql = @"select * 
            //                    from OrderItem ot
            //                    join Snack s
            //                    on ot.SnackId = s.Id
            //                    where OrderId = @id";

            //var orderItems = db.Query<OrderItem, Snack, OrderItem>(orderItemsSql, MapOrderItem, new { id = order.Id }, splitOn: "Id");

            //order.OrderItems = orderItems;

            return orders;
        }

        internal Order GetUnprocessedOrderByUserId(Guid userId)
        {

            using var db = new SqlConnection(_connectionString);

            var sql = @"select * 
                        from [Order] o
                        where o.UserId = @userId and o.processed = 0";

            var order = db.QueryFirstOrDefault<Order>(sql, new { userId = userId });

            var orderItemsSql = @"select * 
                                from OrderItem ot
                                join Snack s
                                on ot.SnackId = s.Id
                                where OrderId = @id";

            if (order != null)
            {
                var orderItems = db.Query<OrderItem, Snack, OrderItem>(orderItemsSql, MapOrderItem, new { id = order.Id }, splitOn: "Id");
                order.OrderItems = orderItems;
            }

            return order;
        }


        internal int GenerateNumber()
        {
            Random generator = new Random();
            int r = generator.Next(100000, 1000000);

            return r;
        }

        internal void AddEmptyOrder(Order newOrder)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"insert into [dbo].[Order]
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

            var orderParams = new
            {
                UserId = newOrder.UserId,
                OrderDate = DateTime.Now,
                OrderNumber = GenerateNumber(),
                Total = newOrder.Total,
                PaymentMethodId = newOrder.PaymentMethodId,
                Processed = newOrder.Processed,
                Shipped = newOrder.Shipped,
            };


            var orderId = db.ExecuteScalar<Guid>(sql, orderParams);
            newOrder.Id = orderId;

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
                Shipped = newOrder.Shipped,
            };


            var orderId = db.ExecuteScalar<Guid>(orderSql, orderParams);
            newOrder.Id = orderId;

            // Creating an orderItem for each snack inputed by user.

            foreach (var snack in snackList)
            {
                var itemParams = new
                {
                    Id = new Guid(),
                    OrderId = newOrder.Id,
                    SnackId = snack.SnackId,
                    Quantity = snack.Quantity
                };
                db.ExecuteScalar<Guid>(orderItemsSql, itemParams);
            }
        }

        internal object UpdateOrderItem(Guid orderItemId, OrderItem orderItem)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update OrderItem
	                    Set 
		                    OrderId = @orderId, 
		                    SnackId = @snackId, 
                            Quantity = @quantity
	                    output inserted.*
	                    where id = @id";

            orderItem.Id = orderItemId;
            var updatedOrderItem = db.QuerySingleOrDefault<OrderItem>(sql, orderItem);

            return updatedOrderItem;
        }

        internal Order ProcessOrder(Guid id, Order order)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update [Order]
                        Set
                        UserId = @userId,
                        OrderDate = @orderDate,
                        OrderNumber = @orderNumber,
                        Total = @total,
                        PaymentMethodId = @paymentMethodId,
                        Processed = @processed,
                        Shipped = @shipped
                        Output inserted.*
                        where id = @id";

            order.Id = id;
            var processedOrder = db.QuerySingleOrDefault<Order>(sql, order);

            return processedOrder;
        }

        internal Order ShipOrder(Guid id, Order order)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update [Order]
                        Set
                        UserId = @userId,
                        OrderDate = @orderDate,
                        OrderNumber = @orderNumber,
                        Total = @total,
                        PaymentMethodId = @paymentMethodId,
                        Processed = @processed,
                        Shipped = @shipped
                        Output inserted.*
                        where id = @id";

            order.Id = id;
            var shippedOrder = db.QuerySingleOrDefault<Order>(sql, order);

            return shippedOrder;
        }

        internal Order UpdateOrder(Guid id, Order order)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update [Order]
                        Set
                        UserId = @userId,
                        OrderDate = @orderDate,
                        OrderNumber = @orderNumber,
                        Total = @total,
                        PaymentMethodId = @paymentMethodId,
                        Processed = @processed,
                        Shipped = @shipped
                        Output inserted.*
                        where id = @id";

            order.Id = id;
            var updatedOrder = db.QuerySingleOrDefault<Order>(sql, order);

            return updatedOrder;
        }

        internal void DeleteOrder(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Delete
                        from [Order]
                        where Id = @id";

            var deleteOrder = db.Execute(sql, new { id });
        }

        internal void DeleteOrderItems(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Delete
                        from OrderItem
                        where Id = @id";

            var deleteItems = db.Execute(sql, new { id });
        }

        internal void AddOrderItem(OrderItem item)
        {
            using var db = new SqlConnection(_connectionString);
            
            var sql = @"insert into [dbo].[OrderItem]
                                (OrderId, SnackId, Quantity)
                                Output inserted.Id
                                values (@OrderId, @SnackId, @Quantity)";

            var id = db.ExecuteScalar<Guid>(sql, item);
            item.Id = id;
        }

        internal OrderItem GetOrderItemByOrderItemId(Guid orderItemId)
        {

            using var db = new SqlConnection(_connectionString);

            var sql = @"select * 
                        from [OrderItem] oi
                        where oi.Id = @orderItemId";

            var orderItem = db.QueryFirstOrDefault<OrderItem>(sql, new { orderItemId });

            if (orderItem == null) return null;

            return orderItem;
        }

        internal Order UpdateTotal(Guid id, Order order)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update [Order]
                        Set
                        UserId = @userId,
                        OrderDate = @orderDate,
                        OrderNumber = @orderNumber,
                        Total = @total,
                        PaymentMethodId = @paymentMethodId,
                        Processed = @processed,
                        Shipped = @shipped
                        Output inserted.*
                        where Id = @id";

            order.Id = id;
            var updatedOrder = db.QuerySingleOrDefault<Order>(sql, order);

            return updatedOrder;
        }

        Order Map(Order order, PaymentMethod paymentMethod)
        {
            order.PaymentMethod = paymentMethod;
            return order;
        }

        OrderItem MapOrderItem(OrderItem orderItem, Snack snack)
        {
            orderItem.ItemSnack = snack;
            return orderItem;
        }
    }
}

