using Microsoft.EntityFrameworkCore;
using StudentCamp.Models;
using System.Collections.Generic;
using System.Linq;

namespace StudentCamp.Context
{
    public class CampContext : DbContext
    {
        public CampContext(DbContextOptions options) : base(options)
        {

        }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Room>().HasMany(u => u.Users).WithOne(r => r.room).OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<User>().HasOne(r => r.room).WithMany(u => u.Users).OnDelete(DeleteBehavior.SetNull);
        }
        
        // Encje
        public DbSet<Expenditure> Expenditures { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Route> Routes { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
