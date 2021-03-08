import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OrderService } from '../../services/order.service';
@Component({
  selector: 'vs-counter-order',
  templateUrl: './counter-order.component.html',
  styleUrls: ['./counter-order.component.css']
})
export class CounterOrderComponent implements OnInit {
  counterOrderForm: FormGroup;
  ddp: { id: number; name: string; }[];
  order_contents: FormArray;
  toggleDelBtn: boolean = false;
  variants: any;
  coc: any = [];
  constructor(private fb: FormBuilder, private orderSvc: OrderService) { }
  ngOnInit() {
    this.toggleDelBtn = false;
    this.orderSvc.counterOrderVariants().subscribe((response: any) => {
      this.variants = response.data;
    });
    this.createForm();
    this.counterOrderForm.get('counter_order_contents').valueChanges.pipe(first()).subscribe(controls => {
      controls.map(control => {
        this.variants.some(v => {
          if (v.variant_id == control.variant_id) {

            this.coc.push({
              variant_id: control.variant_id,
              variant_name: v.variant_name,
              cases: control.cases,
              bottles: control.bottles,
              amount: control.cases * v.unit_price + ((control.bottles != 0) ?
                ((control.bottles * v.unit_price) / v.per_case) : 0)
            })

          } else { return {} }
        });
      })
    })
  }
  createForm() {
    this.counterOrderForm = this.fb.group({
      customer_name: new FormControl(),
      customer_mobile: new FormControl(),
      customer_gst: new FormControl(),
      payment_status: new FormControl(),
      allow_free_items: new FormControl(),
      payment_type: new FormControl(),
      counter_order_contents: this.fb.array([this.createItem()]),
      discount_amount: new FormControl()
    })
  }
  addItem(): void {
    this.order_contents = this.counterOrderForm.get('counter_order_contents') as FormArray;
    this.order_contents.push(this.createItem());
    this.toggleDeleteButton();
  }
  deleteItem(index) {
    this.order_contents.controls.splice(index, 1);
    this.toggleDeleteButton();
  }
  toggleDeleteButton() {
    if (this.order_contents.controls.length > 1) {
      this.toggleDelBtn = true;
    } else {
      this.toggleDelBtn = true;
    }
  }
  createItem(): FormGroup {
    return this.fb.group({
      variant_id: new FormControl(),
      cases: new FormControl(),
      bottles: new FormControl()
    });
  }
  confirmOrder() {
    console.log(this.counterOrderForm.value)
  }
  print() {
    window.print();
  }
}
