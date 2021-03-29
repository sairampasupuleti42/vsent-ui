import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'vs-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  param: any;
  order: any;
  p: boolean = false;

  constructor(private orderSvc: OrderService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.forEach(segment => this.param = segment[1].path);
  }
  ngOnInit() {
    console.log('Get order', this.param)
    this.orderSvc.getOrderByOrderId(parseInt(this.param)).subscribe((response: any) => {
      this.order = response.data;
      console.log(this.order)
    })
  }
  // print() {
  //   this.router.navigate(['/admin/orders/print/', this.order.order_id]);
  //   window.open(url, "_blank");
  // }
}
