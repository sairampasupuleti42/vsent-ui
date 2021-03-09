import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../inventory/service/inventory.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'vs-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor( private orderSvc: OrderService) { }

  ngOnInit() {
    this.orderSvc.fetchOrders().subscribe((response: any) => {
      this.orders = (response) ? response.data : [];
    })
  }

}
