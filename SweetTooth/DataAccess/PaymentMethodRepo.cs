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

            var sql = @"Select * from PaymentMethod where Id = @methodId";

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

        internal object ToggleSoftDelete(Guid id, PaymentMethod paymentMethod)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update PaymentMethod
                        Set 
	                        UserId = @userId, 
	                        Method = @method, 
	                        CardNumber = @cardNumber, 
	                        ExpDate = @expDate,
	                        SecurityCode = @securityCode,
	                        SoftDelete = @softDelete
                        output inserted.*
                        where id = @id";

            paymentMethod.Id = id;
            var updatedPaymentMethod = db.QuerySingleOrDefault<PaymentMethod>(sql, paymentMethod);

            return updatedPaymentMethod;
        }

        internal object Update(Guid id, PaymentMethod paymentMethod)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update PaymentMethod
                        Set 
	                        UserId = @userId, 
	                        Method = @method, 
	                        CardNumber = @cardNumber, 
	                        ExpDate = @expDate,
	                        SecurityCode = @securityCode,
	                        SoftDelete = @softDelete
                        output inserted.*
                        where id = @id";

            paymentMethod.Id = id;
            var updatedPaymentMethod = db.QuerySingleOrDefault<PaymentMethod>(sql, paymentMethod);

            return updatedPaymentMethod;
        }
    }
}
