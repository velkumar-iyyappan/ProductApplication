import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DisplayProductComponent } from './display-product/display-product.component';

const routes: Routes = [
  { path: 'addproduct', component: AddProductComponent },
  { path: 'addproduct/:data', component: AddProductComponent },
      { path: 'displayproduct', component: DisplayProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
