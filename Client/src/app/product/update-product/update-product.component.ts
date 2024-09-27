import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { updateProductResp } from './update-product-response.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateProductService } from './update-product.service';
import { DetailProductService } from '../detail-product/detail-product.service';
import { ProductResponse } from '../detail-product/product-response.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  public form: FormGroup;
  public id!: number;
  public product!: ProductResponse;

  constructor( private updateProductService: UpdateProductService, private router: Router, private route: ActivatedRoute, private detailProductService: DetailProductService ) {
    this.form = new FormGroup({
      name: new FormControl(''),
      feature: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      conditionProd: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.loadDataProduct();
  }

  loadDataProduct = () => {
    this.detailProductService.getProductById(this.id).subscribe((response: ProductResponse) => {
      if(response) {
        return this.form.patchValue({
          name: response.name,
          price: response.price,
          publicationDate: response.publicationDate,
          feature: response.feature,
          conditionProd: response.conditionProd,
          image: response.image
        });
      }
    });
  }

  onSubmit = () => {
    if (this.form.valid) {
      const { name, feature, image, price, conditionProd } = this.form.value;
      const publicationDate = new Date();
      const updateProduct = { id: this.id, name, feature, image, price, conditionProd, publicationDate };
      this.updateProductService.updateProduct(updateProduct).subscribe((response: updateProductResp) => {
        this.router.navigate(["/home"]);
      })
    }
  }
}
