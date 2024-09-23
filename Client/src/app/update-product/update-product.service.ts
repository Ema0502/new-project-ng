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
    return this.http.put<updateProductResp>(`http://localhost:3000/products/${updateProduct.id}`, updateProduct);
  }
}
