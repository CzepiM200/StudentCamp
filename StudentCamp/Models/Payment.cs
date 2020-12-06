using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCamp.Models
{
    // Wpłata
    public class Payment
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [ForeignKey("ParticipantID")]
        public int ParticipantID { get; set; }
        public User Participant { get; set; }
        public string Type { get; set; }
        [Required]
        public string Amount { get; set; }
    }
}
