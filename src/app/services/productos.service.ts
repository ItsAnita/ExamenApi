import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) {}
    obtenerProductos(){
      return this.http.get('https://api.escuelajs.co/api/v1/products')
    }
   }

