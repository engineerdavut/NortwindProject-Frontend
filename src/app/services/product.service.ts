import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModule } from '../models/productResponseModule';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  apiUrl="https://localhost:44336/api/products/getall";

  constructor(private httpClient:HttpClient) { }
  //observable subscribe edilebilir.
  getProduct():Observable<ProductResponseModule>{
    return this.httpClient.get<ProductResponseModule>(this.apiUrl);
  }
}
