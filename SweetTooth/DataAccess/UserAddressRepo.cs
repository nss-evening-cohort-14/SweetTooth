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

        internal UserAddress GetByUserId(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var addrSql = @"Select *
                            From UserAddress
                            Where UserId = @userId";

            var userAddress = db.QueryFirstOrDefault<UserAddress>(addrSql, new { userId = id });

            return userAddress;
        }
        
        internal UserAddress GetByAddressId(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var addrSql = @"Select *
                            From UserAddress
                            Where Id = @id";

            var userAddress = db.QuerySingleOrDefault<UserAddress>(addrSql, new { Id = id });

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

            var addressSql = @"insert into UserAddress(UserId, Street, City, [State], Zip)
                             Output inserted.Id
                             Values( @UserId, @Street, @City, @State, @Zip)";

            var addressId = db.ExecuteScalar<Guid>(addressSql, newAddress);

            newAddress.Id = addressId;
        }

        public void DeleteAddress(Guid id)
        {
            using var db = new SqlConnection(_connectionString);

            var sql = @"Delete 
                        From [UserAddress]
                        Where Id = @id";

            db.Execute(sql, new { id });
        }

        internal object UpdateAddress(Guid id, UserAddress userAddress)
        {
            using var db = new SqlConnection(_connectionString);

            var updateAddressSql = @"Update UserAddress
                        Set 
                            Street = @street,
                            City = @city,
                            [State] = @state,
                            Zip = @zip
                        output inserted.*
                        Where id = @id; ";

            userAddress.Id = id;
            var updatedUserAddress = db.QuerySingleOrDefault<UserAddress>(updateAddressSql, userAddress);

            return updatedUserAddress;
        }
    }
}
