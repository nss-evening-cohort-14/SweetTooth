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

        internal OrderRepo(IConfiguration config)
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

        Order Map(Order order, PaymentMethod paymentMethod)
        {
            order.paymentMethod = paymentMethod;
            return order;
        }
    }
}
