using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ExamenTienda.Models
{
    public class Producto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idProducto { get; set; }

        [Required]
        [MaxLength(50)]
        public string nombre { get; set; }

        [MaxLength(250)]
        public string descripcion { get; set; }

        [Required]
        public decimal precio { get; set; }

        public string imagenUrl { get; set; }

        [Required]
        [MaxLength(50)]
        public string categoria { get; set; }
    }
}
