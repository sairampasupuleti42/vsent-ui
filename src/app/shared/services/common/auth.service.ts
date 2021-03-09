import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as e } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpSvc: HttpClient) { }
  doLogin(user) {
    return this.httpSvc.post(`${e.apiUrl}/user/auth`, user);
  }


}
