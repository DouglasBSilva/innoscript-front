import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import ProductLib from 'src/app/lib/product.lib';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/models/customer';
import { OrdersuccessComponent } from 'src/app/components/ordersuccess/ordersuccess.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.scss']
})
export class CompleteOrderComponent implements OnInit {


  public customer = new Customer();
  public refresh: Function;
  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, public cartService: CartService, public productLib: ProductLib, private customersService: CustomersService) {  }
 
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();


  submitForm(form){
    
    this.customersService.store(this.customer).subscribe(
      customer => {
        this.cartService.store(customer).subscribe(
          (success) => {
              
              this.cartService.clearAll();
              this.refresh();
              const modalRef = this.modalService.open(OrdersuccessComponent);
              this.activeModal.close();
          }, fail => {

          }
        )
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
