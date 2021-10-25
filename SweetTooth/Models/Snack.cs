using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class Snack
    {
        public Guid Id { get; set; }
        public string Name {get; set;}
        public string Category {get; set;}
        public decimal Price { get; set; } = 0;
        public string Description {get; set;}
        public string Image {get; set;}
    }

    public static class Category
    {
        public const string Savory = "Savory";
        public const string Sweet = "Sweet";
    }
    
}
