import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import ProductLib from 'src/app/lib/product.lib';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  public product: Product;

  constructor(public activeModal: NgbActiveModal, private cartService: CartService, public productLib: ProductLib ) { 
  
  }


  public addProduct(quantity: number){
    this.cartService.addProduct(this.product, quantity);
    
  }


  get type(){
    return window.localStorage['currency'] || 'USD';
  }
  ngOnInit(): void {
  }

}
