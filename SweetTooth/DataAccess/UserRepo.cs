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

        internal void Add(User newUser)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"insert into [User] ([Admin], FirstName, LastName, DateCreated, MoodId)
	                        Output Inserted.Id 
                            Values (@Admin, @FirstName, @LastName, @DateCreated, @MoodId)";

            newUser.DateCreated = DateTime.Now;

            var id = db.ExecuteScalar<Guid>(sql, newUser);
            newUser.Id = id;
        }

        internal IEnumerable<User> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var users = db.Query<User>(@"Select * From [User]");

            return users;
        }


    }
}
