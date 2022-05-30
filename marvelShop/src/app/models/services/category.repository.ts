import { Injectable, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { RestService } from './rest.service';


@Injectable(
    // {providedIn: 'root'}
)
export class CategoryRepository implements OnInit {

    private categories:Category[]=[];

  constructor(private restService :RestService) {}

ngOnInit(){
    this.restService
    .getCategory()
    .subscribe(category=>this.categories=category)
}

getCategorY(id:number){
    return this.categories.find(i=>i.id===id);
}



}