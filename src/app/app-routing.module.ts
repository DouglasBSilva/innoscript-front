import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from "./templates/default/default.component";
import {HomeComponent} from "./views/home/home.component";
import {LoginComponent} from "./views/login/login.component";
import { CartComponent } from './views/cart/cart.component';


const routes: Routes = [
  { path: '', component: DefaultComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'cart', component: CartComponent}
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
