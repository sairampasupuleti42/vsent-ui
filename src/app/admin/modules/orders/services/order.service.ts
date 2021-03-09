import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API: any = "http://localhost/api";

  constructor(private httpSvc: HttpClient) { }
  orderVariants() {
    return this.httpSvc.get(`${this.API}/order/variants`);
  }
  addOrder(data) {
    return this.httpSvc.post(
      `${this.API}/orders/order`, data
    )
  }
  fetchOrders() {
    return this.httpSvc.get(`${this.API}/orders`);
  }
  fetchUnpaidOrders() {
    return this.httpSvc.get(`${this.API}/orders/unpaid`);
  }
}
