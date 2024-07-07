import { Component } from '@angular/core';
import { IProducto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: IProducto[] = [];
  nombre: string = '';
  categoria: string = '';

  constructor( private productoService: ProductoService ) {  this.getProductos(); }

  getProductos(): void {
    this.productoService.getProductos().subscribe( productos => {
      this.productos = productos;    
    });
  }

  filterProductos(): IProducto[] {
    return this.productos.filter(p => p.nombre.toLowerCase().includes(this.nombre.toLowerCase()));
  }

  filtrarNombre() {
    if (this.nombre === '') {
        this.getProductos();
        return;
    } else {
      this.productoService.getNombre(this.nombre).subscribe({
        next: (data) => {
          this.productos = data;
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }

  filtrarCategoria(categoria: string) {
    this.categoria = categoria;
    if (this.categoria === '') {
        this.getProductos();
        return;
    } else {
      this.productoService.getCategoria(this.categoria).subscribe({
        next: (data) => {
          this.productos = data;
        },
        error: (e) => {
          console.log(e);
        }
      });
    }
  }
  
}
