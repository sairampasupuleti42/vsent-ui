import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API: any = "http://localhost/api";

  constructor(private httpSvc: HttpClient) { }
  fetchUsers() {
    return this.httpSvc.get(`${this.API}/users`);
  }
  delUser(user_id) {
    return this.httpSvc.get(`${this.API}/user/delete/${user_id}`);
  }
  registerUser(user: any) {
    return this.httpSvc.post(`${this.API}/user/add`, user);
  }
}
