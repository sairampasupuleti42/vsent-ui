import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'vs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private userSvc: UserService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
    })
  }
  saveUser() {
    if (!this.userForm.valid) {
      alert('Please enter all required fields');
    } else {
      this.userSvc.registerUser(this.userForm.value).subscribe((response: any) => {
        console.log('success');
        this.router.navigate(['/account/users/list']);
      })
    }
  }

}
