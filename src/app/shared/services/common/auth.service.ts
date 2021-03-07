import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string = "http://localhost/api";
  constructor(private httpSvc: HttpClient) { }
  doLogin(user) {
    return this.httpSvc.post(`${this.API_URL}/user/auth`, user);
  }
  

}
