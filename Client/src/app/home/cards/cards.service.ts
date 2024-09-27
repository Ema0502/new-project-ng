import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor( private http: HttpClient) { }
  getProductsApi = () => {
    return this.http.get("http://localhost:3000/products");
  }

  getProductsByNameApi = (name: string) => {
    return this.http.get(`http://localhost:3000/products?name=${name}`);
  }
}
