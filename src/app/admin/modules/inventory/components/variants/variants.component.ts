import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Inventory } from '../../models/inventory';
import { InventoryService } from '../../service/inventory.service';
@Component({
  selector: 'vs-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {
  variants: Inventory.Variant[] = [];
  isAdd: boolean = false;
  variantForm: FormGroup;
  products: any;
  submitted: boolean = false;

  // columns: any = {};
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  constructor(private fb: FormBuilder, private invSvc: InventoryService) { }
  ngOnInit() {
    this.getVariants();
    // this.columns = [
    //   { key: 'product_name', title: "Variant Name" },
    //   { key: 'variant_name', title: 'Name' },
    //   { key: 'per_case', title: 'Phone' },
    //   { key: 'unit_price', title: 'Company' },
    //   { key: 'cgst_percentage', title: 'Date' },
    //   { key: 'sgst_percentage', title: 'Phone' },
    // ];
   
  }
  createForm() {
    const numericNumberReg = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
    this.variantForm = this.fb.group({
      variant_name: new FormControl('', [Validators.required]),
      product_id: new FormControl('', [Validators.required]),
      per_case: new FormControl('', [Validators.required]),
      case_price: new FormControl('', [Validators.required, Validators.pattern(numericNumberReg)]),
      unit_price: new FormControl('', [Validators.required, Validators.pattern(numericNumberReg)]),
      quantity: new FormControl(''),
      cgst_percentage: new FormControl(''),
      sgst_percentage: new FormControl(''),
      cess: new FormControl(''),
      margin_amount: new FormControl('', [Validators.pattern(numericNumberReg)]),
      transport_amount: new FormControl('', [Validators.pattern(numericNumberReg)]),
      incentive_amount: new FormControl('', [Validators.pattern(numericNumberReg)])
    })
  }
  addVariant() {
    this.isAdd = true;
  }
  getVariants() {
    this.invSvc.fetchVariants().subscribe((response: any) => {
      if (response) {
        this.variants = response.data.variants;
        this.products = response.data.products;
      }
      this.createForm();
    });
  }
  get vf() { return this.variantForm.controls; }


  saveVariant() {
    this.submitted = true;
    if (this.variantForm.invalid) {
      return;
    }
    if (!!this.variantForm.valid) {
      this.invSvc.insertVariant(this.variantForm.value).subscribe((response: any) => {
        if (response) {
          this.variantForm.reset();
          this.getVariants();
        }
        this.isAdd = false;
      });
    } else {
      alert('Error')
    }
  }
  deleteVariant(i, id) {
    this.invSvc.deleteVariantById(id).subscribe(response => {
      this.variants.splice(i, 1);
    })
  }
}
