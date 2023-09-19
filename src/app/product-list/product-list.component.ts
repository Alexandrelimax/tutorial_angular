import { Component } from '@angular/core';

import { Product, products } from '../interfaces/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [...products];

  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    alert('acima de 700')
  }
}