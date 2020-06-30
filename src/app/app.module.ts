import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultComponent } from './templates/default/default.component';
import { PromocarouselComponent } from './components/promocarousel/promocarousel.component';
import { ProductschooseComponent } from './components/menu/productschoose/productschoose.component';
import { ProductdetailsComponent } from './components/menu/productdetails/productdetails.component';
import { IncrementInputComponent } from './components/increment-input/increment-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatRippleModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductsService } from './services/products.service';
import { CustomersService } from './services/customers.service';
import { BaseService } from './services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';
import { CartComponent } from './views/cart/cart.component';
import { ClearProductComponent } from './views/cart/actions/clear-product/clear-product.component';
import { CompleteOrderComponent } from './views/cart/actions/complete-order/complete-order.component';
import ProductLib from './lib/product.lib';
import { TitleComponent } from './components/title/title.component';
import { OrdersuccessComponent } from './components/ordersuccess/ordersuccess.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    DefaultComponent,
    PromocarouselComponent,
    ProductschooseComponent,
    ProductdetailsComponent,
    IncrementInputComponent,
    CartComponent,
    ClearProductComponent,
    CompleteOrderComponent,
    TitleComponent,
    OrdersuccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductsService, CustomersService, BaseService, CartService, ProductLib],
  bootstrap: [AppComponent]
})
export class AppModule { }
