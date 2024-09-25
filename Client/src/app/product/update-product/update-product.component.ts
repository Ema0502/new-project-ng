import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { updateProductResp } from './update-product-response.model';
import { Router } from '@angular/router';
import { UpdateProductService } from './update-product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  public form: FormGroup;

  constructor( private updateProductService: UpdateProductService, private router: Router ) {
    this.form = new FormGroup({
      name: new FormControl(''),
      feature: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      conditionProd: new FormControl(''),
    });
  }

  onSubmit = () => {
    if (this.form.valid) {
      const id = Number(localStorage.getItem("idProduct"));
      const { name, feature, image, price, conditionProd } = this.form.value;
      const publicationDate = new Date();
      const updateProduct = { id, name, feature, image, price, conditionProd, publicationDate };
      this.updateProductService.updateProduct(updateProduct).subscribe((response: updateProductResp) => {
        this.router.navigate(["/home"]);
      })
    }
  }
}
