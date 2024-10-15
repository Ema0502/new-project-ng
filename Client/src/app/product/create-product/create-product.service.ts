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
    const userId = localStorage.getItem("userId");
    const product = {
      name,
      feature,
      publicationDate,
      image,
      price,
      conditionProd,
      userId
    }
    console.log(product);
    return this.http.post<createProductResp>("https://localhost:7026/api/Products", product);
  }
}
