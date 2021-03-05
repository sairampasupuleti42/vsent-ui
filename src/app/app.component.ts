import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

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
  constructor(@Inject(DOCUMENT) private dom: Document, private router: Router) {
    this.router.events.subscribe(value => {
      if (router.url.toString().endsWith('/login')) {
        this.dom.body.className = 'hold-transition login-page';
      } else {
        this.dom.body.className = 'hold-transition layout-boxed skin-red';
      }
    });
  }

}
