using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCamp.Models
{
    public class Room
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Number { get; set; }
        [Required]
        public int FloorNumber { get; set; }
        public string TenantsGender { get; set; }
        [Required]
        public int SeatsNumber { get; set; }
        public int BusySeatsNumber { get; set; }

        public ICollection<User> Users { get; set; }
    }
}
