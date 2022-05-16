using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MobilneAPI.Entities
{
    public class Category 
    {
        [Key]
        public int CategoryId { get; set; }
        [Required]
        [MaxLength(15)]
        public string Name { get; set; }

        public Category() { }

        public Category(string name)
        {
            Name = name;
        }
    }
}
