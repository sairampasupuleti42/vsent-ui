import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'vs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.fetchUsers().subscribe((response: any) => {
      this.users = response.data;
    })
  }
  deleteUser(i, user) {
    this.userSvc.delUser(user).subscribe((response: any) => {
      this.users.splice(i, 1);
    })
  }
}
