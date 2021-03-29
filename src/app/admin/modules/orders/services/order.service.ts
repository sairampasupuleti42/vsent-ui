import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as e } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private httpSvc: HttpClient) { }
  orderVariants() {
    return this.httpSvc.get(`${e.apiUrl}/order/variants`);
  }
  addOrder(data) {
    return this.httpSvc.post(
      `${e.apiUrl}/orders/order`, data
    )
  }
  fetchOrders() {
    return this.httpSvc.get(`${e.apiUrl}/orders`);
  }
  fetchUnpaidOrders() {
    return this.httpSvc.get(`${e.apiUrl}/orders/unpaid`);
  }
  loadDrivers() {
    return this.httpSvc.get(`${e.apiUrl}/users/drivers`);
  }
  getOrderByOrderId(id: number) {
    return this.httpSvc.get(`${e.apiUrl}/orders/order/${id}`)
  }
}
