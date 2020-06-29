import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocarousel',
  templateUrl: './promocarousel.component.html',
  styleUrls: ['./promocarousel.component.scss']
})
export class PromocarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images  = ["assets/promo_images/b1t2.jpg","assets/promo_images/50off.jpg"];
}
