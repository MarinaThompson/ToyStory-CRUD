using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToyStory_CRUD.Data;
using ToyStory_CRUD.Models;

namespace ToyStory_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CenariosController : ControllerBase
    {
        private readonly ToyStory_CRUDContext _context;

        public CenariosController(ToyStory_CRUDContext context)
        {
            _context = context;
        }

        // GET: api/Cenarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cenario>>> GetCenario()
        {
            return await _context.Cenario.ToListAsync();
        }

        // GET: api/Cenarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cenario>> GetCenario(int id)
        {
            var cenario = await _context.Cenario.FindAsync(id);

            if (cenario == null)
            {
                return NotFound();
            }

            return cenario;
        }

        // PUT: api/Cenarios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCenario(int id, Cenario cenario)
        {
            if (id != cenario.Id)
            {
                return BadRequest();
            }

            _context.Entry(cenario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CenarioExists(id))
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

        // POST: api/Cenarios
        [HttpPost]
        public async Task<ActionResult<Cenario>> PostCenario(Cenario cenario)
        {
            _context.Cenario.Add(cenario);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCenario", new { id = cenario.Id }, cenario);
        }

        // DELETE: api/Cenarios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCenario(int id)
        {
            var cenario = await _context.Cenario.FindAsync(id);
            if (cenario == null)
            {
                return NotFound();
            }

            _context.Cenario.Remove(cenario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CenarioExists(int id)
        {
            return _context.Cenario.Any(e => e.Id == id);
        }
    }
}
