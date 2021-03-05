import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "account",
    pathMatch: "full"
  }, {
    path: "account",
    loadChildren: "./account/account.module#AccountModule"
  }, {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule"
  }, {
    path: "***",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
