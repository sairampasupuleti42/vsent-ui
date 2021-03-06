import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'vs-counter-order',
  templateUrl: './counter-order.component.html',
  styleUrls: ['./counter-order.component.css']
})
export class CounterOrderComponent implements OnInit {
  countterOrderForm: FormGroup;
  ddp: { id: number; name: string; }[];
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  
    this.countterOrderForm = this.fb.group({
      customer_name: new FormControl(),
      customer_mobile: new FormControl(),
      customer_gst: new FormControl(),
      payment_status: new FormControl(),
      allow_free_items: new FormControl(),
      payment_type: new FormControl(),
      counter_order_contents: new FormGroup({
        item: new FormControl(),
        cases: new FormControl(),
        bottles: new FormControl()
      })

    })
    this.ddp = [{
      id: 1,
      name: "Hello"
    }, {
      id: 2,
      name: "World"
    }]
  }

}
