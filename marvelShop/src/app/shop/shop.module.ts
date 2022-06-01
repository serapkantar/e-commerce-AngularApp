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

@NgModule({
  declarations: [ShopComponent, NavbarComponent],
  imports: [
    CommonModule,ModelModule,BrowserModule,FormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  exports:[ShopComponent]
})
export class ShopModule { }
