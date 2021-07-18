using System.ComponentModel.DataAnnotations;

namespace ToyStory_CRUD.Models
{
    public class Personagem
    {

        [Key]
        public int ID { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string Tipo { get; set; }
        
        
        public string Fala { get; set; }

        [Required]
        public string Foto { get; set; }
    }
}
