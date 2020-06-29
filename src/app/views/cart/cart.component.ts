import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClearProductComponent } from './actions/clear-product/clear-product.component';
import ProductLib from 'src/app/lib/product.lib';
import { CompleteOrderComponent } from './actions/complete-order/complete-order.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart: Order[];
  constructor(public cartService: CartService, private modalService: NgbModal, public productLib: ProductLib) { 
    this.cart = cartService.listProducts();
  }

  updateCart(value: number, product: Product){
    this.cartService.updateProductQuantity(product, value);
    this.cart = this.cartService.listProducts();
  }

  public refreshList = () => this.cart = this.cartService.listProducts();
  
  public gotToCheckout(){
    const modalRef = this.modalService.open(CompleteOrderComponent);
  
  }

  public clearProduct(product: Product){
    const modalRef = this.modalService.open(ClearProductComponent);
    modalRef.componentInstance.product = product;
    modalRef.componentInstance.refresh = this.refreshList;

  }

  ngOnInit(): void {
  }

}
