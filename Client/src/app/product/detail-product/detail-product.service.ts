import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from './product-response.model';

@Injectable({
  providedIn: 'root'
})
export class DetailProductService {

  constructor(private http: HttpClient) { }

  getProductById = (id: string): Observable<ProductResponse> => {
    return this.http.get<ProductResponse>(`https://localhost:7026/api/Products/${id}`);
  }

  deleteProduct = (id: string): Observable<ProductResponse> => {
    return this.http.delete<ProductResponse>(`https://localhost:7026/api/Products/${id}`);
  }
}
