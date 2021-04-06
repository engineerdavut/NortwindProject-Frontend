import { ProductService } from './../../services/product.service';
// import { ProductResponseModule } from './../../models/productResponseModule';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductResponseModule } from 'src/app/models/productResponseModule';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  products:Product[]=[];
  dateLoaded=false;

  // productResponseModule:ProductResponseModule={
  //   data:this.products,
  //   messages:"",
  //   success:true
  // };
  //dependency injection veya instance alma olayı parantez içinde.
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    //console.log("init calisti");
    this.getProduct();
  }
  getProduct(){
    this.productService.getProduct().subscribe(response=>{
      this.products=response.data
      this.dateLoaded=true;
    })

  }

}
