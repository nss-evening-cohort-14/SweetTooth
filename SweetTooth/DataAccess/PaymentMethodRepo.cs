using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using SweetTooth.Models;

namespace SweetTooth.DataAccess
{
    public class PaymentMethodRepo
    {
        readonly string _connectionString;

        public PaymentMethodRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SweetTooth");
        }

        internal IEnumerable<PaymentMethod> GetAllUserPaymentMethods(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);

            var methodSql = @"Select * from PaymentMethod Where UserId = @userId";

            var methods = db.Query<PaymentMethod>(methodSql, new { userId });

            return methods;
        }

        internal PaymentMethod GetById(Guid methodId)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Select * from PaymentThod where Id = @methodId";

            var method = db.QuerySingleOrDefault<PaymentMethod>(sql, new { methodId });

            return method;
        }

        internal void Add(PaymentMethod newPaymentMethod)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"insert into PaymentMethod(UserId, Method, CardNumber, ExpDate, SecurityCode)
                        output inserted.Id
                        values (@UserId, @Method, @CardNumber, @ExpDate, @SecurityCode)";
            var id = db.ExecuteScalar<Guid>(sql, newPaymentMethod);
            newPaymentMethod.Id = id;
        }


    }
}
