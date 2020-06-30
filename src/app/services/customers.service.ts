import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private baseUrl = '/customers';
  
  constructor(private baseService: BaseService) { }

  public store(customer): Observable<Customer>{
    this.baseService.url = this.baseUrl;
    return this.baseService.create(customer);
  }

}
