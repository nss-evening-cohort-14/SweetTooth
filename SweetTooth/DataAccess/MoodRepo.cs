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

        internal Mood GetById(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var moodSql = @"Select *
                            from Mood
                            where Id = @moodId";

            var mood = db.QuerySingleOrDefault<Mood>(moodSql, new { moodId = id });
            return mood;

        }

        internal Mood UpdateMood(Guid id, Mood mood)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update Mood
                        Set Name = @name,
                            SoftDelete = @SoftDelete
                        output inserted.*
                        where id = @id";

            mood.Id = id;
            var updatedeMood = db.QuerySingleOrDefault<Mood>(sql, mood);

            return updatedeMood;
        }

        internal void SoftdeleteMood(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"update Mood
                        Set SoftDelete = @softDelete
                        where Id = @id";

            var deletedMood = db.Execute(sql, new { id });
        }
    }
}
