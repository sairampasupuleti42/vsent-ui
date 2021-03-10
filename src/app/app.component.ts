import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { TokenService } from './shared/services/common/token.service';
@Component({
  selector: 'vs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vsent-ui';
  config = {
    appName: "Vsent"
  }
  private roles: string[];
  isLoggedIn = false;

  isLoginPage: boolean = false;
  isAdmin: boolean;
  isSupervisor: boolean;
  constructor(@Inject(DOCUMENT) private dom: Document,
    private router: Router, private tokenSvc: TokenService) {
    this.router.events.subscribe(value => {
      this.isLoginPage = router.url.toString().endsWith('/login');
      this.dom.body.className = (this.isLoginPage) ?
        'hold-transition login-page' : 'hold-transition skin-black-light';

    });
  }
  // ngOnInit() {
  //   this.isLoggedIn = !!this.tokenSvc.getToken();

  //   if (this.isLoggedIn) {
  //     const user = this.tokenSvc.getUser();
  //     this.roles = user.roles;
  //     this.isAdmin = this.roles.includes('ADMIN');
  //     this.isSupervisor = this.roles.includes('SUPERVISOR');
  //   }
  // }

  }
