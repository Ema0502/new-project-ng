import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateProductService } from './create-product.service';
import { createProductResp } from './create-product-resp.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  public form: FormGroup;

  constructor( private createProductService: CreateProductService, private router: Router ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      feature: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  onSubmit = () => {
    if (this.form.valid) {
      const { name, feature, image, price, conditionProd } = this.form.value;
      const publicationDate = new Date();
      this.createProductService.createProduct(name, feature, publicationDate, image, price, conditionProd).subscribe((response: createProductResp) => {
        this.router.navigate(["/home"]);
      })
    }
  }
}
