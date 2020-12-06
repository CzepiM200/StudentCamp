using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCamp.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public int TelefonNumber { get; set; }
        [Required]
        public DateTime Birthday { get; set; }
        [Required]
        public DateTime ArrivalDate { get; set; }
        public DateTime DepartureDate { get; set; }
        public string FunctionName { get; set; }

        [ForeignKey("RoomID")]
        public int? RoomID { get; set; }
        public Room room { get; set; }
    }
}
