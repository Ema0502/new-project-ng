import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateProductService } from './create-product.service';
import { createProductResp } from './create-product-resp.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  public form: FormGroup;

  constructor( private createProductService: CreateProductService, private router: Router, private snackBar: MatSnackBar ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      feature: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      conditionProd: new FormControl(''),
    });
  }

  onSubmit = () => {
    if (this.form.valid) {
      const { name, feature, image, price, conditionProd } = this.form.value;
      const publicationDate = new Date();
      this.createProductService.createProduct(name, feature, publicationDate, image, price, conditionProd).subscribe({
        next: (response: createProductResp) => {
        this.snackBar.open("Product created successfully!", "Close", {
          duration: 4000,
          verticalPosition: "bottom",
          horizontalPosition: "right",
        });
        this.router.navigate(["/home"]);
        }, 
        error: (error) => {
          console.log("error created Product", error);
          this.snackBar.open("Error creating product.", "Close", {
            duration: 4000,
            verticalPosition: "bottom",
            horizontalPosition: "right",
          });
        }
      });
    }
  }
}
