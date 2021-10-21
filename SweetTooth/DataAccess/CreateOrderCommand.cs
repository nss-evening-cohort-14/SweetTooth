using SweetTooth.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.DataAccess
{
    public class CreateOrderCommand
    {
        public Order Order { get; set; }
        public List<Item> SnackIdQuantityList { get; set; }
    }
}
