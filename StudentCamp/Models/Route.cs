using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCamp.Models
{
    public class Route
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime Date { get; set; }
        [Required]
        public string Start { get; set; }
        [Required]
        public string End { get; set; }
        
        [ForeignKey("LeaderID")]
        public int LeaderID { get; set; }
        public User Leader { get; set; }
    }
}
