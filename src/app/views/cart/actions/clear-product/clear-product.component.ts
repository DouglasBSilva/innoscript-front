import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-clear-product',
  templateUrl: './clear-product.component.html',
  styleUrls: ['./clear-product.component.scss']
})
export class ClearProductComponent implements OnInit {

  
  public product: Product;
  public refresh: Function;

  constructor(public activeModal: NgbActiveModal, public cartService: CartService) {  }

  public clearProduct(){
    this.cartService.clearProduct(this.product);
    this.refresh();
    this.activeModal.close();
  }

  ngOnInit(): void {
  }


}
