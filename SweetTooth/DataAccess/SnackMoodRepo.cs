using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Dapper;
using Microsoft.Extensions.Configuration;
using SweetTooth.Models;

namespace SweetTooth.DataAccess
{
    public class SnackMoodRepo
    {
        readonly string _connectionString;

        public SnackMoodRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SweetTooth");
        }
        public void Add(SnackMood snackMood)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Insert into SnackMood (MoodId, SnackId)
                        output inserted.Id
                        values (@MoodId, @SnackId)";

            var id = db.ExecuteScalar<Guid>(sql, snackMood);

            snackMood.Id = id;

        }

        internal SnackMood GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select * from SnackMood where Id = @id";

            var snackMood = db.QuerySingleOrDefault<SnackMood>(sql, new{ id } );

            return snackMood;

        }
    }
}
