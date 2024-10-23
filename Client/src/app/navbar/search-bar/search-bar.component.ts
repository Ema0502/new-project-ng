import { Component } from '@angular/core';
import { SearchBarService } from './search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchInput: string = '';

  constructor(private searchBarService: SearchBarService) { }

  onSearchChange(value: string): void {
    this.searchInput = value;
    this.searchBarService.changeSearchInput(this.searchInput);
  }
}