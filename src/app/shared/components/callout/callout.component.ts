import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalloutService } from '../../services/common/callout.service';

@Component({
  selector: 'vs-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {
  private subscription: Subscription;
  message: any;

  constructor(private calloutSvc: CalloutService) { }

  ngOnInit() {
    this.subscription = this.calloutSvc.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            message.cssClass = 'alert alert-success';
            break;
          case 'error':
            message.cssClass = 'alert alert-danger';
            break;
        }

        this.message = message;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
