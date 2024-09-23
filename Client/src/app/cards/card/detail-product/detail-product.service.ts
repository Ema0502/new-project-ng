import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from './product-response.model';

@Injectable({
  providedIn: 'root'
})
export class DetailProductService {

  constructor(private http: HttpClient) { }

  getProductById = (id: number): Observable<ProductResponse> => {
    return this.http.get<ProductResponse>(`http://localhost:3000/products/${id}`);
  }

  deleteProduct = (id: number): Observable<ProductResponse> => {
    return this.http.delete<ProductResponse>(`http://localhost:3000/products/${id}`);
  }
}
