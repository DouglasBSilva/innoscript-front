import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[];

  constructor(private productsService: ProductsService) { }

  private getProducts(){
    this.productsService.index().subscribe(
      result => {
       this.products = result;
    });
  }


  ngOnInit(): void {
    this.getProducts();
  }

}
