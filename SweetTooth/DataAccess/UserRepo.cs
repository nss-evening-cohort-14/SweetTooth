using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using SweetTooth.Models;
using Dapper;

namespace SweetTooth.DataAccess
{
    public class UserRepo
    {
        readonly string _connectionString;

        public UserRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SweetTooth");
        }

        internal User GetById(Guid userId)
        {
            using var db = new SqlConnection(_connectionString);

            var userSql = @"Select * 
                            From [User]
                            Where Id = @id";

            var user = db.QuerySingleOrDefault<User>(userSql, new { id = userId });

            if (user == null) return null;

            var addrSql = @"Select *
                            From UserAddress
                            Where UserId = @userId";

            var userAddress = db.Query<UserAddressRepo>(addrSql, new { userId });

            return user;
        }

        internal IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var users = db.Query<User>(@"Select * From [User]");

            return users;
        }

        internal void Add(User newUser)
        {
            using var db = new SqlConnection(_connectionString);

            var userSql = @"insert into [User] ([Admin], FirstName, LastName, DateCreated, MoodId)
	                            Output Inserted.Id 
                                Values (@Admin, @FirstName, @LastName, @DateCreated, @MoodId)";

            newUser.DateCreated = DateTime.Now;

            var userId = db.ExecuteScalar<Guid>(userSql, newUser);
            newUser.Id = userId;
        }

    }
}
