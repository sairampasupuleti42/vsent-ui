import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpSvc: HttpClient) { }
  doLogin(user) {
    return this.httpSvc.post('https://reqres.in/api/login', user)
  }
  

}
