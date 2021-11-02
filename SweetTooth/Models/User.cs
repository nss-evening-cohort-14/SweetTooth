using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public Boolean Admin { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime DateCreated { get; set; }
        public Guid MoodId { get; set; }
        public Boolean SoftDelete { get; set; }

        public IEnumerable<UserAddress> Address { get; set; }
    }
}
