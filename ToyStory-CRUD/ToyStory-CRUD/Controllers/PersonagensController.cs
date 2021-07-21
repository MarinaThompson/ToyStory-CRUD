using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ToyStory_CRUD.Data;
using ToyStory_CRUD.Models;

namespace ToyStory_CRUD.Controllers
{
    public class PersonagensController : Controller
    {
        private readonly ToyStory_CRUDContext _context;

        public PersonagensController(ToyStory_CRUDContext context)
        {
            _context = context;
        }

        // GET: Personagens
        public async Task<IActionResult> Index(string personagemCenario)
        {

            IQueryable<string> cenarioQuery = from c in _context.Personagem
                                              orderby c.Cenario.Nome
                                              select c.Cenario.Nome;
            var personagens = from c in _context.Personagem
                              select c;

            if (!string.IsNullOrEmpty(personagemCenario))
            {
                personagens = personagens.Where(x => x.Cenario.Nome == personagemCenario);
            }

            var personagemCenarioVM = new PersonagemCenarioViewModel
            {
                Cenarios = new SelectList(await cenarioQuery.Distinct().ToListAsync()), 
                Personagens = await personagens.ToListAsync()
            };
            var toyStory_Context = _context.Personagem.Include(p => p.Cenario);
            return View(personagemCenarioVM);
        }

        // GET: Personagens/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var personagem = await _context.Personagem
                .Include(p => p.Cenario)
                .FirstOrDefaultAsync(m => m.ID == id);

            if (personagem == null)
            {
                return NotFound();
            }

            return View(personagem);
        }

        // GET: Personagens/Create
        public IActionResult Create()
        {
            ViewData["CenarioId"] = new SelectList(_context.Set<Cenario>(), "Id", "Nome");
            return View();
        }

        // POST: Personagens/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Nome,Tipo,Fala,Foto,CenarioId")] Personagem personagem)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _context.Add(personagem);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                ViewData["CenarioId"] = new SelectList(_context.Set<Cenario>(), "Id", "Nome", personagem.CenarioId);
            }
            catch(DbUpdateException e)
            {
                ModelState.AddModelError("", "Não foi possível realizar essa operação");
            }
            return View(personagem);
        }

        // GET: Personagens/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var personagem = await _context.Personagem.FindAsync(id);
            if (personagem == null)
            {
                return NotFound();
            }
            ViewData["CenarioId"] = new SelectList(_context.Set<Cenario>(), "Id", "Nome", personagem.CenarioId);
            return View(personagem);
        }

        // POST: Personagens/Edit/5
        [HttpPost, ActionName("Edit")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditPost(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var personagemToUpdate = await _context.Personagem.FirstOrDefaultAsync(p => p.ID == id);
            if (await TryUpdateModelAsync<Personagem>(
                personagemToUpdate,
                "",
                p => p.Tipo, p => p.Nome, p => p.Fala, p => p.Foto, p => p.CenarioId))
            {
                try
                {
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateException ex)
                {
                    Console.WriteLine(ex);
                    ModelState.AddModelError("", "Não foi possível realizar essa operação");
                }
            }
                ViewData["CenarioId"] = new SelectList(_context.Set<Cenario>(), "Id", "Nome", personagemToUpdate.CenarioId);
                return View(personagemToUpdate);
            }
        
        // GET: Personagens/Delete/5
        public async Task<IActionResult> Delete(int? id, bool? saveChangesError = false)
        {
            if (id == null)
            {
                return NotFound();
            }

            var personagem = await _context.Personagem
                .Include(p => p.Cenario)
                .AsNoTracking()
                .FirstOrDefaultAsync(m => m.ID == id);
            if (personagem == null)
            {
                return NotFound();
            }

            if (saveChangesError.GetValueOrDefault())
            {
                ViewData["ErrorMessage"] =
                    "Exclusão falhou."; 
            }

            return View(personagem);
        }

        // POST: Personagens/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var personagem = await _context.Personagem.FindAsync(id);
            if(personagem == null)
            {
                return RedirectToAction(nameof(Index));

            }
            try
            {
                _context.Personagem.Remove(personagem);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            catch(DbUpdateException e)
            {
                Console.WriteLine(e);
                return RedirectToAction(nameof(Delete), new { id = id, saveChangesError = true }); 
            }


        }

        private bool PersonagemExists(int id)
        {
            return _context.Personagem.Any(e => e.ID == id);
        }
    }
}
