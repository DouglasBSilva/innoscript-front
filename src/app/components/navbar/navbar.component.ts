import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  get type(){
    return window.localStorage.getItem('currency') || "USD";
  }

  public setCurrency(type){
    window.localStorage.setItem('currency',type);
  }

}
