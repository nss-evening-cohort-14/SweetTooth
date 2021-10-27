using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class PaymentMethod
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Method { get; set; }
        public string CardNumber { get; set; }
        public string ExpDate { get; set; }
        public string SecurityCode { get; set; }
        public bool SoftDelete { get; set; }
    }

    public static class Method
    {
        public const string Credit = "Credit";
        public const string Debit = "Debit";
    }
}
