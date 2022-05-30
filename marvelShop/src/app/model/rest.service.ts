import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
   connection=environment.api.baseUrl;

  constructor(private http:HttpClient) {}


getProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.connection +"/product");
}

getCategory():Observable<Category[]>{
  return this.http.get<Category[]>(this.connection +"/category");
}
}
