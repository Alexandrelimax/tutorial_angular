import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}
  

  addItems(item: Product) {
    this.items.push(item);
    console.log(this.items);
    
    
  }

  removeItems(itemRemoved: Product) {
    const index = this.items.findIndex((item) => item === itemRemoved);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems(): Product[]{
    return this.items;
  }

  getOnlyOneItem(item: Product): Product | undefined {
    return this.items.find((product) => item === product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }
}
