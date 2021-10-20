using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; } // foreign key
        public DateTime OrderDate { get; set; }
        public int OrderNumber { get; set; }
        public decimal Total { get; set; }
        public Guid PaymentMethodId { get; set; } // foreign key
        public bool Processed { get; set; }
        public bool Shipped { get; set; }

        // These two properties are needed for getting a single order info. Not to store in the order table.
        public IEnumerable<OrderItem> OrderItems { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
    }
}
