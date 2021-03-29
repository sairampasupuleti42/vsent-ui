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
  filterString = "";
  filtered;
  sortType: any;
  sortReverse: boolean;
  filteredOrders: any;
  constructor(private fb: FormBuilder, private invSvc: InventoryService) { }
  ngOnInit() {
    this.getVariants();

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
      this.onFilterChange();
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
      this.onFilterChange()
    })
  }

  onFilterChange() {
    this.filtered = this.variants.filter((variant) => this.isMatch(variant));
  }

  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().toLowerCase().indexOf(this.filterString.toLowerCase()) > -1
    }
  }
  sortFn(property) {
    this.sortType = property;
    this.sortReverse = !this.sortReverse;
    this.filtered.sort(this.dynamicSort(property));
  }
  dynamicSort(property) {
    let sortOrder = -1;

    if (this.sortReverse) {
      sortOrder = 1;
    }

    return function (a, b) {
      let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
}
