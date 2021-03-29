import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterOrderComponent } from './components/counter-order/counter-order.component';
import { DeliveryOrderComponent } from './components/delivery-order/delivery-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PrintOrderComponent } from './components/print-order/print-order.component';
import { UnpaidOrderComponent } from './components/unpaid-order/unpaid-order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';

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
  },
  {
    path: "view/:id",
    component: ViewOrderComponent
  }, {
    path: "print/:id",
    component: PrintOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
