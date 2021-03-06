import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/common/auth.service';
import { TokenService } from 'src/app/shared/services/common/token.service';

@Component({
  selector: 'vs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message: any;
  submitted: boolean = false;
  returnUrl: any;
  errors: any = "";
  constructor(private fb: FormBuilder,
    private authSvc: AuthService, private router: Router,
    private route: ActivatedRoute, private tokenSvc: TokenService) {

  }
  ngOnInit() {
    if (this.tokenSvc.getToken()) {
      this.router.navigate(['admin']);
    }
    this.loginForm = this.fb.group({
      email: new FormControl('eve.holt@vsent.in', Validators.required),
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
      this.authSvc.doLogin(this.loginForm.value).pipe().subscribe((response: any) => {
        if (response.data.token) {
          this.errors = { text: "Login success", type: "success" };
          this.tokenSvc.saveToken(response.data.token);
          this.tokenSvc.saveUser(response.data);
          this.router.navigate([this.returnUrl]);
        } else {
          this.errors = { text: response.msg, type: "danger" };
        }
      })
    }
  }
  onBlur() {
    this.submitted = false;
  }


}
