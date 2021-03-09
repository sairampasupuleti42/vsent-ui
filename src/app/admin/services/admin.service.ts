import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as e } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpSvc: HttpClient) { }
  fetchStats() {
    return this.httpSvc.get(`${e.apiUrl}/dashboard`);
  }
}
