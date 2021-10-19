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

        public IEnumerable<Order> GetAll()
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
    }
}
