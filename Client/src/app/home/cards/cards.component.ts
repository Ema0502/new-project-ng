import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from './cards.service';
import { ProductResponse } from '../../product/detail-product/product-response.model';
import { SearchBarService } from '../../navbar/search-bar/search-bar.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  products: ProductResponse[] = [];

  constructor(private cardsService: CardsService, private searchBarService: SearchBarService) { }

  ngOnInit(): void {
    this.searchBarService.currentSearchInput.subscribe((input) => {
      if (input) {
        this.renderCardsByName(input);
      } else {
        this.renderAllCards();
      }
    });
  }

  renderAllCards = () => {
    this.products = [];
    this.cardsService.getProductsApi().subscribe((response: any) => {
      this.products = response;
    })
  }

  renderCardsByName = (name: string) => {
    this.products = [];
    this.cardsService.getProductsByNameApi(name).subscribe((response: any) => {
      this.products = response;
    })
  }
}
