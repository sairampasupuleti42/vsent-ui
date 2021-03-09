import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as e } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private httpSvc: HttpClient) { }
  fetchUsers() {
    return this.httpSvc.get(`${e.apiUrl}/users`);
  }
  delUser(user_id) {
    return this.httpSvc.get(`${e.apiUrl}/user/delete/${user_id}`);
  }
  registerUser(user: any) {
    return this.httpSvc.post(`${e.apiUrl}/user/add`, user);
  }
}
