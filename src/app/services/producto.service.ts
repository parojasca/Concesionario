import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURL = "http://localhost:8080/api/v1/"

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}productos`);
  }

  createProduct(producto: Producto): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}crearProducto`, producto )
  }

  getProductById(id: number): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURL}actualizarProducto/${id}`);
  }

  updateProduct(id: number, producto: Producto): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}actualizarProducto/${id}`, producto )
  }

  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
