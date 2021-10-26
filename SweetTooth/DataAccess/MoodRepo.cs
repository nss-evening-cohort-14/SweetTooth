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

        internal void Add(Mood newMood)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"insert into Mood(Name)
                        output inserted.Id
                        values (@Name)";

            var id = db.ExecuteScalar<Guid>(sql, newMood);
            newMood.Id = id;
        }

        internal object GetById(Guid moodId)
        {
            using var db = new SqlConnection(_connectionString);

            var moodSql = @"Select *
                            from Mood
                            where Id = @moodId";

            var mood = db.QuerySingleOrDefault<Mood>(moodSql, new { id = moodId });

            return mood;

        }
        
        internal void UpdateMood(Guid id, Mood mood)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update Mood
                        Set Name = @name
                        output inserted.*
                        where id = @id";

            mood.Id = id;
            var moddId = db.QuerySingleOrDefault<Guid>(sql, mood)
        }
    }
}
