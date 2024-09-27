import { Component } from '@angular/core';
import { SearchBarService } from './search-bar.service';
import { ProductResponse } from '../../product/detail-product/product-response.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  searchInput: string = "";
  products: ProductResponse[] = [];

  constructor(private searchBarService: SearchBarService) { }
  onSearch() {
    this.searchBarService.searchProducts(this.searchInput).subscribe(
      (results: ProductResponse[]) => {
        this.products = results;
      },
      (error) => {
        console.error('Error searching users:', error);
      }
    );
  }
}
