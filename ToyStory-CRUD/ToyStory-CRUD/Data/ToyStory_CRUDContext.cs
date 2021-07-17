using Microsoft.EntityFrameworkCore;
using ToyStory_CRUD.Models;

namespace ToyStory_CRUD.Data
{
    public class ToyStory_CRUDContext : DbContext
    {
        public ToyStory_CRUDContext (DbContextOptions<ToyStory_CRUDContext> options)
            : base(options)
        {
        }

        public DbSet<Personagem> Personagem { get; set; }
    }
}
