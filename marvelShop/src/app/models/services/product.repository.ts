import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { RestService } from './rest.service';


@Injectable(
    // {providedIn: 'root'}
)
export class productRepository implements OnInit {
    private products:Product[]=[];

  constructor(private restService :RestService) {}
ngOnInit(){
    this.restService
    .getProduct()
    .subscribe(products=>
    this.products=products
    )
}

getProduct(id:number){
    return this.products.find(i=>i.id===id);
}



}