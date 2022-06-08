import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/model/product.model';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() selectedProduct?:Product;
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedProduct);
  }
   
}
