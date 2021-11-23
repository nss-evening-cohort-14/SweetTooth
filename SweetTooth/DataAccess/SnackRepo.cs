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

        internal object GetAllByMood(Guid moodId)
        {
            using var db = new SqlConnection(_connectionString);

            var snacksByMoodSql = @"Select s.* 
                                     from Snack s
                                        left join SnackMood sm
                                            on s.Id = sm.snackId
                                     where sm.MoodId = @moodId";

            var snacksByMood = db.Query<Snack>(snacksByMoodSql, new { moodId });

            if (snacksByMood == null) return null;

            return snacksByMood;
        }

        internal Snack GetById(Guid snackId)
        {
            using var db = new SqlConnection(_connectionString);

            var snackSql = @"Select * from Snack where Id = @id";

            var snack = db.QuerySingleOrDefault<Snack>(snackSql, new { id = snackId });
            
            if (snack == null) return null;
            
            return snack;
        }

        internal object GetAllByCategory(string category)
        {
            using var db = new SqlConnection(_connectionString);

            var snacksByCategorySql = @"Select * 
                                        from Snack
                                        where  Category = @category";

            var snacksByCategory = db.Query<Snack>(snacksByCategorySql, new { category });

            if (snacksByCategory == null) return null;

            return snacksByCategory;
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

        internal object ToggleSoftDelete(Guid id, Snack snack)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update Snack
	                    Set 
		                    [Name] = @name, 
		                    Category = @category, 
		                    Price = @price, 
		                    [Description] = @description, 
		                    [Image] = @image,
                            SoftDelete = @softDelete
	                    output inserted.*
	                    where id = @id";

            snack.Id = id;
            var updatedSnack = db.QuerySingleOrDefault<Snack>(sql, snack);

            return updatedSnack;
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
		                    [Image] = @image,
                            SoftDelete = @softDelete
	                    output inserted.*
	                    where id = @id";

            snack.Id = id;
            var updatedSnack = db.QuerySingleOrDefault<Snack>(sql, snack);

            return updatedSnack;
        }
    }
}
