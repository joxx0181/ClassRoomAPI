using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClassRoomAPI.Models
{
    // This class represents NoiseLevel!
    public class NoiseLevel
    {
        // The Key attribute is the PrimaryKey!
        [Key]
        public int NoiseId { get; set; }
        public int Noise { get; set; }

        // Using the Required attribute to require that TempComment is not null!
        // Using the Column attritute to Specific a particular Typename  - in this case to be nvarchar(255)!
        [Required]
        [Column(TypeName = "nvarchar(255)")]
        public string NoiseComment { get; set; }
    }
}
