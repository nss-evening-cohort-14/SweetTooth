using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using SweetTooth.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.DataAccess
{
    public class MoodRepo
    {
        string _connectionString;

        public MoodRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SweetTooth");
        }

        internal IEnumerable<Mood> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select *
                        from Mood";

            var moods = db.Query<Mood>(sql);

            return moods;
        }
    }
}
