import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURL = "http://192.168.0.11:8080/api/v1/productos"

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`);
  }
}
