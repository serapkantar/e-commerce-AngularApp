import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { Order } from '../model/order.model';

@Injectable()
export class RestService {
   connection=environment.api.baseUrl;

  constructor(private http:HttpClient) {}


getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(this.connection +"products");
}

getCategory():Observable<Category[]>{
  return this.http.get<Category[]>(this.connection +"categories");
}

saveOrder(order:Order):Observable<Order>{
  return this.http.post<Order>(this.connection+'orders',order)
}
}
