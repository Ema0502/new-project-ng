import { Component } from '@angular/core';
import { CardsService } from './cards.service';
import { ProductResponse } from '../../product/detail-product/product-response.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  products: ProductResponse[] = [];

  constructor (private cardsService: CardsService) {
    this.renderAllCards();
  }

  renderAllCards = () => {
    this.cardsService.getProductsApi().subscribe((response: any) => {
      response.forEach((element: ProductResponse) => {
        return this.products.push(element)
      });
    })
  }
}
