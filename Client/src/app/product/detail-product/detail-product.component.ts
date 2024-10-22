import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DetailProductService } from './detail-product.service';
import { ProductResponse } from './product-response.model';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {
  id!: string;
  product!: ProductResponse;
  constructor (
    private detailProductService: DetailProductService, 
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => this.id = params["id"]);
    this.getProductDetails();
  }

  getProductDetails(): void {
    this.detailProductService.getProductById(String(this.id)).subscribe({
      next: (response: ProductResponse) => {
        this.product = response;
      },
      error: (error) => {
        console.error("Product error: ", error);
      }
    });
  }

  deleteProduct(): void {
    this.detailProductService.deleteProduct(String(this.id)).subscribe({
      next: (response: ProductResponse) => {
        this.snackBar.open("Product delete successfully!", "Close", {
          duration: 4000,
          verticalPosition: "bottom",
          horizontalPosition: "right",
        });
        this.product = response;
      },
      error: (error) => {
        console.error("Product error: ", error);
        this.snackBar.open("Error delete product.", "Close", {
          duration: 4000,
          verticalPosition: "bottom",
          horizontalPosition: "right",
        });
      }
    });
  }
}
