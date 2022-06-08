import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  selectedProduct:Product | undefined;

  constructor(
    private cart:Cart,
    private router:Router

    ) {}

  ngOnInit(): void {
  }

  
addToCart(product:Product){

  alertify.success(product.productName);
  return this.cart.addItem(product) ;
  
  
}

displayDetails(product:Product){
 this.selectedProduct=product

}

}
