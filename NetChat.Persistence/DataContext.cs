using Microsoft.EntityFrameworkCore;
using NetChat.Domain;
using System;

namespace NetChat.Persistence
{
    public class DataContext : DbContext
    {
        //dotnet ef migrations add initialcreate -p NetChat.Persistence/ -s NetChat.Api/
        //uptdate-database

        //dotnet ef migrations add seedData -p Netchat.Persistence/ -s NetChat.Api/
        public DataContext(DbContextOptions options) : base (options)
        {
        }
        public DbSet<Channel> Channels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder
                .Entity<Channel>()
                .HasData(new Channel { 
                    ChannelId = Guid.NewGuid(),
                    Name = "DotNetCore",
                    Description = "DotNetCore full stack"
                }, new Channel
                {
                    ChannelId = Guid.NewGuid(),
                    Name = "Python",
                    Description = "Python Developer"
                });
        }
    }
}