using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using SweetTooth.Models;
//using Dapper;


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
            //using var db = new SqlConnection(_connectionString);
            var sql = @"";
        }
    }
}
