using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SweetTooth.Models
{
    public class SnackMood
    {
        public Guid Id { get; set; }
        public Guid MoodId { get; set; }
        public Guid SnackId { get; set; }
        public string MoodName { get; set; }
        public string SnackName { get; set;  }
    }
}
