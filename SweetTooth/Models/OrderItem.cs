using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class OrderItem
    {
        public Guid Id { get; set; }
        public Guid OrderId { get; set; } // foreign key 
        public Guid SnackId { get; set; } // foreign key 
        public int Quantity { get; set; }
    }
}
