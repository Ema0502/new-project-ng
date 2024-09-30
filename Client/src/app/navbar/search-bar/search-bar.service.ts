import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  private searchInputSource = new BehaviorSubject<string>("");
  currentSearchInput = this.searchInputSource.asObservable();

  changeSearchInput(input: string) {
    this.searchInputSource.next(input);
  }
}
