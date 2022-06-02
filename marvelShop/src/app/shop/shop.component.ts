import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Category } from '../models/model/category.model';
import { Product } from '../models/model/product.model';
import { Cart } from '../models/services/cart.model';
import { CategoryRepository } from '../models/services/category.repository';
import { productRepository } from '../models/services/product.repository';

declare let alertify: { success: (arg0: string | undefined) => void; };

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public selectedCategory: Category | undefined;
  public productsPerPage: number = 12;
  public selectedPage: number = 1;


  constructor(
    private productRepository: productRepository,
    private categoryRepository: CategoryRepository,
    private cart:Cart,
  ) { }

  ngOnInit(): void {
   
  }


  get products(): Product[] {
    //paginator  0,12-12,24
    let index = (this.selectedPage - 1) * this.productsPerPage;
    return this.productRepository.getProducts(this.selectedCategory)
      .slice(index, index + this.productsPerPage);
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }


  onChange(newCategory?: Category) {
    this.selectedCategory = newCategory;
    this.selectedPage=1;
  }

changePage(page:number){
  this.selectedPage=page;
}

get pageNumbers():number[]{
 return Array(
    Math.ceil(this.productRepository.getProducts(this.selectedCategory).length/this.productsPerPage))
    .fill(0).map((a,i)=>i+1);
}

addToCart(product:Product){

  alertify.success(product.productName);
  return this.cart.addItem(product) ;
  
  
}





}
