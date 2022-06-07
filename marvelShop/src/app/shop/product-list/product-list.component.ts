import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/model/product.model';
import { Cart } from 'src/app/models/services/cart.model';
declare let alertify: { success: (arg0: string | undefined) => void; };

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()products:Product[]=[];
  constructor(
    private cart:Cart
  ) { }

  ngOnInit(): void {
  }

  
addToCart(product:Product){

  alertify.success(product.productName);
  return this.cart.addItem(product) ;
  
  
}
}
