import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable, of} from "rxjs";
import { Product } from '../models/product';
import products from './database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private route = '/products'; 
  
  constructor(private baseService: BaseService) { }
  
  index(): Observable<Product[]>{
    this.baseService.url = this.route;
    return this.baseService.get();
  }
}
