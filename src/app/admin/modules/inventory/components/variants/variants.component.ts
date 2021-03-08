import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Inventory } from '../../models/inventory';
import { InventoryService } from '../../service/inventory.service';
@Component({
  selector: 'vs-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {
  variants: Inventory.Variant[];
  isAdd: boolean = false;
  variantForm: FormGroup;
  products: any;
  constructor(private fb: FormBuilder, private invSvc: InventoryService) { }
  ngOnInit() {
    this.invSvc.fetchVariants().subscribe((response: any) => {
      if (response) {
        this.variants = response.data.variants;
        this.products = response.data.products;
      }
      this.createForm();
    });
  }
  createForm() {
    this.variantForm = this.fb.group({
      variant_name: new FormControl(''),
      product_id: new FormControl(''),
      per_case: new FormControl(''),
      case_price: new FormControl(),
      unit_price: new FormControl(''),
      quantity: new FormControl(''),
      cgst_percentage: new FormControl(''),
      sgst_percentage: new FormControl(''),
      cess: new FormControl(''),
      margin_amount: new FormControl(''),
      transport_amount: new FormControl(''),
      incentive_amount: new FormControl('')
    })
  }
  addVariant() {
    this.isAdd = true;
  }
  saveVariant() {
    this.invSvc.insertVariant(this.variantForm.value).subscribe((response: any) => {
      if (response) {
        this.variants.push(response.data);
        this.variantForm.reset();
      }
      this.isAdd = false;
    });
  }
  deleteVariant(i, id) {
    this.invSvc.deleteVariantById(id).subscribe(response => {
      this.variants.splice(i, 1);
    })
  }
}
