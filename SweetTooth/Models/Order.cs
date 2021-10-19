using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public DateTime OrderDate { get; set; }
        public int OrderNumber { get; set; }
        public int Total { get; set; }
        public Guid PaymentMethodId { get; set; }
        public bool Processed { get; set; }
        public bool Shipped { get; set; }
    }
}
