import { Component } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  products: Object[] = [];

  constructor (private cardsService: CardsService) {
    this.renderAllCards();
  }

  renderAllCards = () => {
    this.cardsService.getProductsApi().subscribe((response: any) => {
      response.forEach((element: Object) => {
        return this.products.push(element)
      });
    })
  }
}
