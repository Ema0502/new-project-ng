import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../../product/detail-product/product-response.model';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor(private http: HttpClient) { }

  searchProducts(name: string): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`http://localhost:3000/search?name=${name}`);
  }
}
