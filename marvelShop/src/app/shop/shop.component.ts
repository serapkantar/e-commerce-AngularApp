import { Component, OnInit } from '@angular/core';
import { Category } from '../models/model/category.model';
import { Product } from '../models/model/product.model';
import { CategoryRepository } from '../models/services/category.repository';
import { productRepository } from '../models/services/product.repository';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public selectedCategory: Category | undefined;

  constructor(
    private productRepository: productRepository,
    private categoryRepository: CategoryRepository
  ) { }

  ngOnInit(): void {
  }


  get products(): Product[] {
    return this.productRepository.getProducts(this.selectedCategory);
  }

  get categories(): Category[] {

    return this.categoryRepository.getCategories();
  }


  onChange(newCategory?: Category) {
    this.selectedCategory = newCategory;
  }



}
