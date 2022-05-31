import { Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { RestService } from './rest.service';


@Injectable()
export class productRepository implements OnInit {
    private products:Product[]=[];

  constructor(private restService :RestService) {
    this.restService
    .getProducts()
    .subscribe(products=>
    this.products=products
    );
  }

ngOnInit(){}

//?
getProduct(id:number) {
    return this.products.find(i=>i.id===id);
}

getProducts():Product[]{

    return this.products;

}

}