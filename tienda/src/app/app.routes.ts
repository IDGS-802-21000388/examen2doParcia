import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './tienda/productos/productos.component';
import { ContactoComponent } from './tienda/contacto/contacto.component';
import { InicioComponent } from './tienda/inicio/inicio.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
