import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalloutService } from '../../services/common/callout.service';

@Component({
  selector: 'vs-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.css']
})
export class CalloutComponent implements OnInit {
  @Input()
  message: any;

  constructor(private calloutSvc: CalloutService) { }

  ngOnInit() {
    this.message = null;
  }
  ngOnChanges(change: SimpleChanges) {
    if(change['currentValue']) {
      this.message = change['currentValue'];
    }
  }
}
