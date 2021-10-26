using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class Mood
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool SoftDelete { get; set; } = false;
    }
}
