import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API: any = "http://localhost/api";

  constructor(private httpSvc: HttpClient) { }
  fetchStats() {
    return this.httpSvc.get(`${this.API}/dashboard`);
  }
}
