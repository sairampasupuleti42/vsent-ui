import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'vs-unpaid-order',
  templateUrl: './unpaid-order.component.html',
  styleUrls: ['./unpaid-order.component.css']
})
export class UnpaidOrderComponent implements OnInit {

  orders: any;

  constructor(private orderSvc: OrderService) { }

  ngOnInit() {
    this.orderSvc.fetchUnpaidOrders().subscribe((response: any) => {
      this.orders = (response) ? response.data : [];
    })
  }

}
