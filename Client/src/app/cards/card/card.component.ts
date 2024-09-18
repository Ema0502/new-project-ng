import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product: any;
  constructor (private router: Router) { }

  getPorductDetail = () => {
    this.router.navigate([`home/product/${this.product.id}`]);
  }
}
