import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  // The ActivatedRoute is specific to each routed component that the Angular Router loads. It contains information about the route, its parameters, and additional data associated with the route.
  constructor( 
    private route: ActivatedRoute,
    private cartService: CartService
  ) {

   }

  // This method subscribes to route parameters and fetchs the product based on the productId.
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

  // This method receives the current product and uses the cart service's addToCart() method to add the product to the cart. Then, it displays a message that you've added a product to the cart.
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}