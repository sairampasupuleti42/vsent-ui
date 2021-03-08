import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API: any = "http://localhost/api";

  constructor(private httpSvc: HttpClient) { }
  counterOrderVariants() {
    return this.httpSvc.get(`${this.API}/orders/counter-order/variants`);
  }
}
