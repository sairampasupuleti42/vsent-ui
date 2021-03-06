import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CounterOrderComponent } from './components/counter-order/counter-order.component';
import { DeliveryOrderComponent } from './components/delivery-order/delivery-order.component';
import { UnpaidOrderComponent } from './components/unpaid-order/unpaid-order.component';
import { DailyReportComponent } from './components/daily-report/daily-report.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { PrintOrderComponent } from './components/print-order/print-order.component';

@NgModule({
  declarations: [CounterOrderComponent, DeliveryOrderComponent,
    UnpaidOrderComponent, DailyReportComponent, OrdersComponent, ViewOrderComponent, PrintOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
