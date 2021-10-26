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
    public class SnackRepo
    {
        readonly string _connectionString;

        public SnackRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SweetTooth");
        }

        internal IEnumerable<Snack> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"select * from Snack";
            var snacks = db.Query<Snack>(sql);

            return snacks;
        }
        internal Snack GetById(Guid snackId)
        {
            using var db = new SqlConnection(_connectionString);

            var snackSql = @"Select * from Snack where Id = @id";

            var snack = db.QuerySingleOrDefault<Snack>(snackSql, new { id = snackId });
            
            if (snack == null) return null;
            
            return snack;
        }

        internal void Add(Snack newSnack)
        {
            using var db = new SqlConnection(_connectionString);

            //add snack
            var snackSql = @"insert into Snack(Name, Category, Price, Description, Image)
                             output inserted.Id
                             values (@Name, @Category, @Price, @Description, @Image)";

            var snackId = db.ExecuteScalar<Guid>(snackSql, newSnack);
            newSnack.Id = snackId;
        }

        internal void Remove(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Delete From Snack Where Id = @id";

            db.Execute(sql, new { id });
        }

        internal object Update(Guid id, Snack snack)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update Snack
	                    Set 
		                    [Name] = @name, 
		                    Category = @category, 
		                    Price = @price, 
		                    [Description] = @description, 
		                    [Image] = @image
	                    output inserted.*
	                    where id = @id";

            snack.Id = id;
            var updatedSnack = db.QuerySingleOrDefault<Snack>(sql, snack);

            return updatedSnack;
        }
    }
}
