import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vs-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {
  @Input()
  message: any;


  ngOnInit() {
    this.message = null;
  }
  ngOnChanges(change: SimpleChanges) {
    if (change['currentValue']) {
      this.message.text = change['currentValue'];
    }
    if (!navigator.onLine) {
      this.message = {
        text: "You're in offline",
        type: 'danger'
      }
    }
  }
}
