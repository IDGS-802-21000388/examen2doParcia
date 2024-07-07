import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from '../services/producto.service';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    InicioComponent,
    ProductosComponent,
    ContactoComponent,
  ],
  providers: [
    ProductoService
  ]
})
export class TiendaModule { }
