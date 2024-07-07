import { Component } from '@angular/core';
import { IProducto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  productos: IProducto[] = [];
  nombre: string = '';
  categoria: string = '';

  constructor( private productoService: ProductoService ) {  this.getProductos(); }

  getProductos(): void {
    this.productoService.getProductos().subscribe( productos => {
      this.productos = productos.slice(0, 3);
    });
  }

}
