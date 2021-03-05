import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/common/auth.service';

@Component({
  selector: 'vs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any;
  constructor(private fb: FormBuilder, private authSvc: AuthService, private router: Router) {

  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('eve.holt@reqres.in'),
      password: new FormControl('cityslicka'),
      req_id: "login"
    });

  }
  login() {
    if (!!this.loginForm.valid) {
      this.authSvc.doLogin(this.loginForm.value).pipe(catchError((error: any) => {
        this.errors = error.error;
        return of([])
      })).subscribe((response: any) => {
        if (response.token) {
          this.router.navigate(['/admin'])
        }
      })
    }
  }


}
