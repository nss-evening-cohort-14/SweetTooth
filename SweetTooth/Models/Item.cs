using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class Item
    {
        public Guid SnackId { get; set; }
        public int Quantity { get; set; }
    }

    // Created this model so that when creating an order, the user can enter the quantity for each snack. 
    // Can't use an orderItem, because those need the orderId on them. 
    // Can't use a snack, because those don't have the quantity on them. 
    // This model is there to bridge the gap between snack model and orderItem model. 
}
