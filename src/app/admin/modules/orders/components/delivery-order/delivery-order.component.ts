import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'vs-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.css']
})
export class DeliveryOrderComponent implements OnInit {
  orderForm: FormGroup;
  order_contentsArray: FormArray;
  toggleDelBtn: boolean = false;
  variants: any = [];
  coc: any = [];
  totalAmountLbl: string;
  finalAmountLbl: string;
  submitted: boolean = false;
  drivers: any =[];

  constructor(private fb: FormBuilder, private orderSvc: OrderService) { }
  ngOnInit() {
    this.toggleDelBtn = false;
    this.orderSvc.orderVariants().subscribe((response: any) => {
      this.variants = response.data;
    }); 
    this.loadDrivers();
    this.createForm();
  }
  createForm() {
    this.orderForm = this.fb.group({
      order_type: 'DELIVERY',
      driver_id: new FormControl(''),
      allow_free_items: new FormControl('YES'),
      order_contents: this.fb.array([this.createItem()]),
      discount_amount: new FormControl(0)
    })
  }
  addItem(): void {
    this.order_contentsArray = this.orderForm.get('order_contents') as FormArray;
    this.order_contentsArray.push(this.createItem());
    this.toggleDeleteButton();
  }
  deleteItem(index) {
    this.order_contentsArray.controls.splice(index, 1);
    this.toggleDeleteButton();
  }
  toggleDeleteButton() {
    if (this.order_contentsArray.controls.length > 1) {
      this.toggleDelBtn = true;
    } else {
      this.toggleDelBtn = true;
    }
  }
  get of() { return this.orderForm.controls.order_contents['controls']; }
  createItem(): FormGroup {
    return this.fb.group({
      variant_id: new FormControl('', [Validators.required]),
      cases: new FormControl('', [Validators.required]),
      bottles: new FormControl('', [Validators.required]),
      amount: new FormControl('')
    });
  }
  confirmOrder() {
    this.submitted = true;
    //console.log([0].controls.cases.errors);
    if (!this.orderForm.valid) {
      alert('Please fill all the required fields!')
      return false;
    } else {
      console.log(this.of['order_contents'])
      this.orderSvc.addOrder(this.orderForm.value).subscribe((response: any) => {
        console.log('Success');
        this.submitted = false;
        this.orderForm.reset();
        
      })
    }
  }
  print() {
    window.print();
  }
  fetchName(vId) {
    const n = this.variants && this.variants.filter(v => (v.variant_id == vId));
    return (n[0]) ? n[0].variant_name : "";
  }
  onBlur() {
    const contents = this.orderForm.value.order_contents;
    contents.map(control => {
      const a = this.variants.filter(v => v.variant_id == control.variant_id);
      control.amount = ((control.cases) * parseFloat(a[0].unit_price) + (((control.bottles) != 0) ?
        (((control.bottles) * parseFloat(a[0].unit_price)) / (a[0].per_case)) : 0)).toFixed(2);
    })
    let t = 0;
    contents.map(c => {
      t += parseFloat(c.amount);
    });
    let l = null;
    l = t.toFixed(2);
    this.totalAmountLbl = l;
  }
  calcDiscount() {
    this.finalAmountLbl = (parseFloat(this.totalAmountLbl) - parseFloat(this.orderForm.value.discount_amount)).toFixed(2)
  }
  loadDrivers() {
    this.orderSvc.loadDrivers().subscribe((response: any) => {
      this.drivers = response.data;
    });
  }
}
