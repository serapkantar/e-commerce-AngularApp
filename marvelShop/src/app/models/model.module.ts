import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HttpClientModule} from '@angular/common/http';
import { CategoryRepository } from './services/category.repository';
import { productRepository } from './services/product.repository';
import { RestService } from './services/rest.service';
import { Cart } from './services/cart.model';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[CategoryRepository,productRepository,RestService,Cart],
  
})
export class ModelModule { }
