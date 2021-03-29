import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from '../../../inventory/service/inventory.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'vs-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private orderSvc: OrderService, private router: Router) { }

  ngOnInit() {
    this.orderSvc.fetchOrders().subscribe((response: any) => {
      this.orders = (response) ? response.data : [];
    })
  }
  sort(colName) {
    this.orders.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
  }
  viewOrder(o) {
    this.router.navigate(['/admin/orders/view/', o])
  }

}
