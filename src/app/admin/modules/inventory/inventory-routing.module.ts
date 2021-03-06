import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { VariantsComponent } from './components/variants/variants.component';

const routes: Routes = [
 {
   path:"",
   redirectTo:"products",
   pathMatch:"full"
 },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path:"variants",
    component: VariantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
