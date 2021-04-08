import { ProductService } from './../../services/product.service';
// import { ProductResponseModule } from './../../models/productResponseModule';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';


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
  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    //console.log("init calisti");
    ///observeable subscribe edilir asenkron kod.
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryID"]){
        this.getProductByCategory(params["categoryID"]);
      }
      else{
        this.getProduct();
      }
    }
  )


  }
  getProduct(){
    this.productService.getProduct().subscribe(response=>{
      this.products=response.data
      this.dateLoaded=true;
    })

  }
  getProductByCategory(categoryID:number){
    this.productService.getProductByCategory(categoryID).subscribe(response=>{
      this.products=response.data

    })

  }

}
