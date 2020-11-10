import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  // The items property stores the array of the current products in the cart.
  items = [];

  constructor(
    private http: HttpClient
  ) {}

  // This method appends a product to an array of items.
  addToCart(product) {
    this.items.push(product);
  }

  // This method collects the items users added to the cart and returns each item with its associated quantity.
  getItems() {
    return this.items;
  }

  // This method returns an empty array of items.
  clearCart() {
    this.items = [];
    return this.items;
  }

  // This method uses the HttpClient get() method to retrieve the shipping data.
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
