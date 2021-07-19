using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToyStory_CRUD.Data;
using ToyStory_CRUD.Models;

namespace ToyStory_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonagensController : ControllerBase
    {
        private readonly ToyStory_CRUDContext _context;

        public PersonagensController(ToyStory_CRUDContext context)
        {
            _context = context;
        }

        // GET: api/Personagens
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Personagem>>> GetPersonagem()
        {
            return await _context.Personagem.Include("Cenario").ToListAsync();
        }

        // GET: api/Personagens/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Personagem>> GetPersonagem(int id)
        {
            var personagem = await _context.Personagem.Include("Cenario").FirstOrDefaultAsync(x => x.ID == id);

            if (personagem == null)
            {
                return NotFound();
            }

            return personagem;
        }

        // PUT: api/Personagens/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonagem(int id, Personagem personagem)
        {
            if (id != personagem.ID)
            {
                return BadRequest();
            }

            _context.Entry(personagem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonagemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Personagens
        [HttpPost]
        public async Task<ActionResult<Personagem>> PostPersonagem(Personagem personagem)
        {
            _context.Personagem.Add(personagem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersonagem", new { id = personagem.ID }, personagem);
        }

        // DELETE: api/Personagens/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePersonagem(int id)
        {
            var personagem = await _context.Personagem.FindAsync(id);
            if (personagem == null)
            {
                return NotFound();
            }

            _context.Personagem.Remove(personagem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonagemExists(int id)
        {
            return _context.Personagem.Any(e => e.ID == id);
        }
    }
}
