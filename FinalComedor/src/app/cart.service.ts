import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];
  constructor() { }

  pushToCart(itemId) {
    this.cart.push(itemId);
  }
  showCart() {
    return this.cart;
  }
  emptyCart() {
    this.cart = [];
  }
}
