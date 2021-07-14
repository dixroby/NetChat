using Microsoft.EntityFrameworkCore;
using NetChat.Domain;

namespace NetChat.Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base (options)
        {
        }
        public DbSet<Channel> Channels { get; set; }
    }
}