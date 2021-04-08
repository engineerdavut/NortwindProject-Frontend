import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModule } from '../models/listResponseModule';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  apiUrl="https://localhost:44336/api/categories/getall";

  constructor(private httpClient:HttpClient) { }
  //observable subscribe edilebilir.
  getCategory():Observable<ListResponseModule<Category>>{
    return this.httpClient.get<ListResponseModule<Category>>(this.apiUrl);
  }
}
