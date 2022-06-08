import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Category } from '../models/model/category.model';
import { Product } from '../models/model/product.model';
import { Cart } from '../models/services/cart.model';
import { productRepository } from '../models/services/product.repository';



@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public selectedPage: number = 1;
  public selectedCategory: Category | undefined;
  public productsPerPage: number = 12;
  public selectedProducts:Product[]=[];

  constructor(
    private productRepository: productRepository,
    private cart:Cart,
  ) { }

  ngOnInit(): void {
   
  }

  get products(): Product[] {
    //paginator  0,12-12,24
    let index = (this.selectedPage - 1) * this.productsPerPage;
    this.selectedProducts=this.productRepository
   .getProducts(this.selectedCategory)
   return  this.selectedProducts.slice(index, index + this.productsPerPage);

  }
  getCategory(category:Category)
{
 this.selectedCategory=category;
}

changePage(page:number){
  this.selectedPage=page;
}

get pageNumbers():number[]{
 return Array(
    Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage))
    .fill(0).map((a,i)=>i+1);
}
changePageSize(size: number) {
  this.productsPerPage = size;
  this.changePage(1);
}

}
