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
    return this.http.get("https://localhost:7026/api/Products");
  }

  getProductsByNameApi(name: string): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`https://localhost:7026/api/Products/search?name=${name}`);
  }
}
