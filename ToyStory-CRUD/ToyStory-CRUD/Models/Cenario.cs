﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToyStory_CRUD.Models
{
    public class Cenario
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public ICollection<Personagem> Personagens { get; set; }
    }
}
