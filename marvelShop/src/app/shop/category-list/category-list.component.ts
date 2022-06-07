import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/model/category.model';
import { CategoryRepository } from 'src/app/models/services/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
 
  
  public selectedCategory: Category | undefined;

  @Output()  category=new EventEmitter<Category>()
  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit(): void {
  }
  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  onChange(newCategory?: Category) {
    this.selectedCategory = newCategory;
    this.category.emit(newCategory);
  }
}
