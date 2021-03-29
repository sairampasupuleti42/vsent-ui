import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'vs-print-order',
  templateUrl: './print-order.component.html',
  styleUrls: ['./print-order.component.css']
})
export class PrintOrderComponent implements OnInit {
  param: string;
  order: any;

  constructor(@Inject(DOCUMENT) private dom: Document, private orderSvc: OrderService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.forEach(segment => this.param = segment[1].path);
  }
  ngOnInit() {

    this.orderSvc.getOrderByOrderId(parseInt(this.param)).subscribe((response: any) => {
      this.order = response.data;
      this.dom.title = this.order.order_no;
    })
    setTimeout(() => window.print(), 800);

  }
  @HostListener('window:afterprint')
  onafterprint() {
    this.router.navigate(['/admin/orders/view/', this.order.order_id]);
  }

}
