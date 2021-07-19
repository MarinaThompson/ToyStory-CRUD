using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToyStory_CRUD.Models
{
    public class PersonagemCenarioViewModel
    {
        public ICollection<Personagem> Personagens { get; set; }
        public SelectList Cenarios { get; set; }
        public string PersonagemCenario { get; set; }
    }
}
