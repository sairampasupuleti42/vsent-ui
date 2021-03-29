import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Inventory } from '../../models/inventory';
import { InventoryService } from '../../service/inventory.service';

@Component({
  selector: 'vs-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Inventory.Product[];
  isAdd: boolean = false;
  productForm: FormGroup;
  filterString = "";
  filtered;
  sortType: any;
  sortReverse: any;
  constructor(private fb: FormBuilder, private invSvc: InventoryService) { }

  ngOnInit() {
    this.getProducts();
    this.productForm = this.fb.group({
      product_name: new FormControl(''),
      product_image: new FormControl('')
    });
  }
  getProducts() {
    this.products = [];
    this.invSvc.fetchProducts().subscribe((response: any) => {
      this.products = (response) ? response.data : [];
      this.onFilterChange();
    });
    
  }
  addProduct() {
    this.isAdd = true;
  }
  saveProduct() {
    this.invSvc.insertProduct(this.productForm.value).subscribe((response: any) => {
      if (response) {
        this.productForm.reset();
        this.getProducts();
      }
      this.isAdd = false;
    });

  }
  onFileChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.productForm.patchValue({ 'product_image': reader.result });
  }
  deleteProduct(i, id) {
    this.invSvc.deleteProductById(id).subscribe(response => {
      this.products.splice(i, 1);
      this.onFilterChange();
    })
  }

  onFilterChange() {
    this.filtered = this.products.filter((product) => this.isMatch(product));
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
