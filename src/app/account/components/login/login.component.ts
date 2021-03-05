import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/common/auth.service';
import { CalloutService } from 'src/app/shared/services/common/callout.service';

@Component({
  selector: 'vs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: any;
  submitted: boolean;
  returnUrl: any;
  constructor(private fb: FormBuilder,
    private calloutSvc: CalloutService,
    private authSvc: AuthService, private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('eve.holt@reqres.in', Validators.required),
      password: new FormControl('cityslicka', Validators.required),
      req_id: "login"
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
  }
  get lf() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (!!this.loginForm.valid) {
      this.authSvc.doLogin(this.loginForm.value).pipe(catchError((error: any) => {
        this.message = {
          text: error.error,
          type: 'danger'
        };
        return of([])
      })).subscribe((response: any) => {
        if (response.token) {
          this.router.navigate([this.returnUrl]);
        }
      })
    }
  }


}
