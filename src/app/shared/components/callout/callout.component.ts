import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vs-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {
  @Input()
  errors: any;


  ngOnInit() {
    this.errors = null;
  }
  ngOnChanges(change: SimpleChanges) {
    if (change['currentValue']) {
      this.errors.text = change['currentValue'];
    }
    if (!navigator.onLine) {
      this.errors = {
        text: "You're in offline",
        type: 'danger'
      }
    }
  }
}
