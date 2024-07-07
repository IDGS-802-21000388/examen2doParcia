using ExamenTienda.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace examen.Models
{
    public partial class TiendaContext : DbContext
    {
        public TiendaContext(DbContextOptions<TiendaContext> options) : base(options) { }

        public virtual DbSet<Producto> Productos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasKey(e => e.idProducto);
                entity.ToTable("Productos");

                entity.Property(e => e.idProducto).HasColumnName("Id");
                entity.Property(e => e.nombre).HasColumnName("Nombre").HasMaxLength(50).IsRequired();
                entity.Property(e => e.descripcion).HasColumnName("Descripcion").HasMaxLength(250);
                entity.Property(e => e.precio).HasColumnName("Precio").IsRequired();
                entity.Property(e => e.imagenUrl).HasColumnName("ImagenUrl");
                entity.Property(e => e.categoria).HasColumnName("Categoria").HasMaxLength(50).IsRequired();
            });
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
