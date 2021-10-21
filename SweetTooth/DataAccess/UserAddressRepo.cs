using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using SweetTooth.Models;
using Dapper;
using System.Data.SqlClient;

namespace SweetTooth.DataAccess
{
    public class UserAddressRepo
    {
        readonly string _connectionString;

        public UserAddressRepo(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SweetTooth");
        }

        internal UserAddress GetById(Guid Id)
        {
            using var db = new SqlConnection(_connectionString);

            //if (userAddressId.UserId == null) return null;

            var addrSql = @"Select *
                            From UserAddress
                            Where UserId = @userId";

            var userAddress = db.QuerySingleOrDefault<UserAddress>(addrSql);

            return userAddress;
        }

        //internal IEnumerable<User> GetAll()
        //{
        //    using var db = new SqlConnection(_connectionString);

        //    var users = db.Query<User>(@"Select * From [User]");

        //    return users;
        //}

        //internal void AddAddress(UserAddressRepo newAddress)
        //{
        //    using var db = new SqlConnection(_connectionString);

        //    var addressSql = @"insert into UserAddress(Id, UserId, Street, City, [State], Zip)
        //                     Output inserted.Id
        //                     Values(@Id, @UserId, @Street, @City, @State, @Zip)
        //                        Where UserId = @UserId";

        //    var addressId = db.ExecuteScalar<Guid>(addressSql, newAddress);
        //    newAddress.Id = addressId;
        //}


    }
}
