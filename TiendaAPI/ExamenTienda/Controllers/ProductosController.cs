using examen.Models;
using ExamenTienda.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExamenTienda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly TiendaContext _context;

        public ProductosController(TiendaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetProductos()
        {
            return await _context.Productos.ToListAsync();
        }

        [HttpGet]
        [Route("getNombre")]
        public async Task<IActionResult> getNombre(string nombre)
        {
            if (string.IsNullOrEmpty(nombre))
            {
                return BadRequest("vacia");
            }

            var producto = await _context.Productos
                .Where(p => p.nombre.Contains(nombre))
                .ToListAsync();

            if (!producto.Any())
            {
                return NotFound("No existe el producto.");
            }
            return Ok(producto);
        }

        [HttpGet]
        [Route("filterCategoria")]
        public async Task<IActionResult> filterCategoria(string categoria)
        {
            if (string.IsNullOrEmpty(categoria))
            {
                return BadRequest("vacia");
            }

            var producto = await _context.Productos
                .Where(p => p.categoria.Contains(categoria))
                .ToListAsync();
            return Ok(producto);
        }

        [HttpPost]
        public async Task<ActionResult<Producto>> PostProducto(Producto producto)
        {
            _context.Productos.Add(producto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProducto", new { id = producto.idProducto }, producto);
        }

    }
}
