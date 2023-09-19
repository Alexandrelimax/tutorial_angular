import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Product, products } from '../interfaces/products';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService 
    
    ){}
  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    
    const productIdFromRoute = Number(routeParams.get('productId'));
    

    this.product = products.find(product => product.id === productIdFromRoute)

  }

  addCart(product: Product){
    this.cartService.addItems(product)
    alert('Your product has been added to the cart!')
  }

}
