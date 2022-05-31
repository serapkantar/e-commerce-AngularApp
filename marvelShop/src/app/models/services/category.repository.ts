import { Injectable, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { RestService } from './rest.service';


@Injectable()
export class CategoryRepository implements OnInit {

    private categories:Category[]=[];

  constructor(private restService :RestService) {
    this.restService
    .getCategory()
    .subscribe(category=>this.categories=category)
  }

ngOnInit(){}

getCategory(id:number){
    return this.categories.find(i=>i.id===id);
}

getCategories():Category[]{
    return this.categories;
}


}