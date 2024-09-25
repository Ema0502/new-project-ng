import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat';
import { createProductResp } from './create-product-resp.model';

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {

  constructor(private http: HttpClient) { }

  createProduct = (name: string, feature: string, publicationDate: Date, image: string, price: number, conditionProd: string): Observable<createProductResp> => {
    const product = {
      name,
      feature,
      publicationDate,
      image,
      price,
      conditionProd
    }
    return this.http.post<createProductResp>("http://localhost:3000/createProduct", product);
  }
}
