﻿using System.Linq;
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
        public async Task<IActionResult> Index()
        {
            var toyStory_CRUDContext = _context.Personagem.Include(p => p.Cenario);
            return View(await toyStory_CRUDContext.ToListAsync());
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
        public async Task<IActionResult> Create([Bind("ID,Nome,Tipo,Fala,Foto,CenarioId")] Personagem personagem)
        {
            if (ModelState.IsValid)
            {
                _context.Add(personagem);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CenarioId"] = new SelectList(_context.Set<Cenario>(), "Id", "Nome", personagem.CenarioId);
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
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Nome,Tipo,Fala,Foto,CenarioId")] Personagem personagem)
        {
            if (id != personagem.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(personagem);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PersonagemExists(personagem.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["CenarioId"] = new SelectList(_context.Set<Cenario>(), "Id", "Nome", personagem.CenarioId);
            return View(personagem);
        }

        // GET: Personagens/Delete/5
        public async Task<IActionResult> Delete(int? id)
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

        // POST: Personagens/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var personagem = await _context.Personagem.FindAsync(id);
            _context.Personagem.Remove(personagem);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PersonagemExists(int id)
        {
            return _context.Personagem.Any(e => e.ID == id);
        }
    }
}
