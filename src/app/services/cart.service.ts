import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order';
import ProductLib from '../lib/product.lib';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private productLib: ProductLib) {
    if(!window.localStorage['cart']){
      window.localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  private get cart(): Order[]{
    return JSON.parse(window.localStorage['cart']);
  }

  private set cart(cart){
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  public getTotal(){
    return this.cart.reduce((accumulator, current) => accumulator + (current.quantity * this.productLib.getValue(current.product)),0).toFixed(2).replace('.',',');
  }
  public getTotalFloat(){
    return this.cart.reduce((accumulator, current) => accumulator + (current.quantity * this.productLib.getValue(current.product)),0);
  }

  public count(){
    return this.cart.reduce((accumulator, current) =>  accumulator + current.quantity ,0);
  }

  public listProducts(){
    return this.cart;
  }

  public addProduct(product: Product, quantity: number){
    let cart = this.cart;
    let found =  cart.find(order => product.id == order.productId);
    if(found){
      found.quantity += quantity;
    }else{
      let order = new Order(product.id, quantity);
      order.product = product; 
      cart.push(order);
    }
    this.cart = cart;
   
  }

  public removeProduct(product: Product, quantity: number = 1){
    let cart = this.cart;
    let found =  cart.find(order => product.id == order.productId);
    if(found){
      found.quantity -= quantity;
      this.cart = cart;
      if (found.quantity <= 0) this.clearProduct(product);
    }
  
  }

  public updateProductQuantity(product: Product, quantity: number){
    let cart = this.cart;
    let found =  cart.find(order => product.id == order.productId);
    if(found){
      found.quantity = quantity;
      this.cart = cart;
      if (found.quantity <= 0) this.clearProduct(product);
    }
  }

  public clearProduct(product: Product){
    this.cart = this.cart.filter(order => product.id != order.productId);
  }


}
