import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterOrderComponent } from './components/counter-order/counter-order.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {
    path: "",
    component: OrdersComponent
  },
  {
    path: "counter-order",
    component: CounterOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
