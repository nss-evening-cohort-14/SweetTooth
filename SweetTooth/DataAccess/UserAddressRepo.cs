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

            var userAddress = db.QuerySingleOrDefault<UserAddress>(addrSql, new { userId = Id });

            return userAddress;
        }

        internal IEnumerable<UserAddress> GetAll()
        {
            using var db = new SqlConnection(_connectionString);

            var allAddresses = db.Query<UserAddress>(@"Select * From UserAddress");

            return allAddresses;
        }

        internal void AddAddress(UserAddress newAddress)
        {
            using var db = new SqlConnection(_connectionString);

            //var userIdSql = @"Select Id 
            //                From [User]
            //                Where Id = @id";

            //var userId = db.QuerySingleOrDefault<Guid>(userIdSql, new { id = userId });

            var addressSql = @"insert into UserAddress(UserId, Street, City, [State], Zip)
                             Output inserted.Id
                             Values( @UserId, @Street, @City, @State, @Zip)";

            var addressId = db.ExecuteScalar<Guid>(addressSql, newAddress);

            newAddress.Id = addressId;
        }


    }
}
