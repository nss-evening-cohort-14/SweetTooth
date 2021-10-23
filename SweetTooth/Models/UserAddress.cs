using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class UserAddress
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Street { get; set; }
        public string City { get; set; }

        [RegularExpression(@"[A-Z]{2}",
            ErrorMessage = "State must be 2 letters and uppercase.")]
        public string State { get; set; }

        public string Zip { get; set; }
    }
}
