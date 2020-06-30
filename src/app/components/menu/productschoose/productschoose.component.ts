import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductdetailsComponent} from "../productdetails/productdetails.component";
import { Product } from 'src/app/models/product';
import ProductLib from 'src/app/lib/product.lib';

@Component({
  selector: 'app-productschoose',
  templateUrl: './productschoose.component.html',
  styleUrls: ['./productschoose.component.scss']
})
export class ProductschooseComponent implements OnInit {
  @Input() product: Product;

  constructor(private modalService: NgbModal, public productLib: ProductLib) {}

  get type(){
    return window.localStorage['currency'] || 'USD';
  }

  open() {
    const modalRef = this.modalService.open(ProductdetailsComponent);
    modalRef.componentInstance.product = this.product;
  }

  ngOnInit(): void {
  }

}
