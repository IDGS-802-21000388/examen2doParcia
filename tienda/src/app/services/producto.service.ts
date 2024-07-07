import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../interfaces/producto';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private _endpoint: string = environment.endPoint;
  private _url: string = `${this._endpoint}Productos/`;

  constructor(private _http: HttpClient) { }

  getProductos(): Observable<IProducto[]> {
    console.log(this._url);
    return this._http.get<IProducto[]>(this._url);
  }

  getNombre(nombre: string): Observable<IProducto[]> {
    return this._http.get<IProducto[]>(`${this._url}getNombre?nombre=${nombre}`);
  }

  getCategoria(categoria: string): Observable<IProducto[]> {
    return this._http.get<IProducto[]>(`${this._url}filterCategoria?categoria=${categoria}`);
  }
}
