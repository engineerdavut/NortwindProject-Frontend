import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryID",component:ProductComponent}
  // :categoryId yeri dinamik.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
