import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from '../../product/detail-product/product-response.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor( private http: HttpClient) { }
  getProductsApi = () => {
    return this.http.get("http://localhost:3000/products");
  }

  getProductsByNameApi(name: string): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`http://localhost:3000/search?name=${name}`);
  }
}
