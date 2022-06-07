import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../models/model.module';
import { ShopComponent } from './shop.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

//Angular Material 
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [ShopComponent, NavbarComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent],
  imports: [
    CommonModule,
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,

    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
   
    
  ],
  exports:[ShopComponent,NavbarComponent,CartDetailComponent,CheckoutComponent]
})
export class ShopModule { }
