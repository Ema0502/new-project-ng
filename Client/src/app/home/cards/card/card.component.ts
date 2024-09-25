import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductResponse } from '../../../product/detail-product/product-response.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product!: ProductResponse;
  constructor (private router: Router) { }

  getProductDetail  = () => {
    this.router.navigate([`home/products/${this.product.id}`]);
  }
}
