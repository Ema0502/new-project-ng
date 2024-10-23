import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { updateProductResp } from './update-product-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductService {

  constructor(private http: HttpClient) { }

  updateProduct = (updateProduct: updateProductResp): Observable<updateProductResp> => {
    return this.http.put<updateProductResp>(`https://localhost:7026/api/Products/${updateProduct.id}`, updateProduct);
  }
}
