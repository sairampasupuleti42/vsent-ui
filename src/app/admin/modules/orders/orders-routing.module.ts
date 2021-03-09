import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterOrderComponent } from './components/counter-order/counter-order.component';
import { DeliveryOrderComponent } from './components/delivery-order/delivery-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UnpaidOrderComponent } from './components/unpaid-order/unpaid-order.component';

const routes: Routes = [
  {
    path: "",
    component: OrdersComponent
  },
  {
    path: "counter",
    component: CounterOrderComponent
  },
  {
    path: "delivery",
    component: DeliveryOrderComponent
  },
  {
    path: "unpaid",
    component: UnpaidOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
