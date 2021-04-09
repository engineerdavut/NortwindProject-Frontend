import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModule';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  apiUrl="https://localhost:44336/api/";

  constructor(private httpClient:HttpClient) { }
  //observable subscribe edilebilir.
  getProduct():Observable<ListResponseModule<Product>>{
    let newPath=this.apiUrl+"products/getall";
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }
  getProductByCategory(categoryID:number):Observable<ListResponseModule<Product>>{
    let newPath=this.apiUrl+"products/getbycategoryid?categoryID="+categoryID;
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }
}
