import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.scss']
})
export class OrdersuccessComponent implements OnInit {
  
  
  public customer: Customer;

  constructor(public activeModal: NgbActiveModal ) { 
  
  }

  ngOnInit(): void {
  }

}
