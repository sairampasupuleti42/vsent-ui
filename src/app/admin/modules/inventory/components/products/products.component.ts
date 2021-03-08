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
  constructor(private fb: FormBuilder, private invSvc: InventoryService) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      product_name: new FormControl(''),
      product_image: new FormControl('')
    })
    this.invSvc.fetchProducts().subscribe((response: any) => {
      this.products = (response) ? response.data : [];
    })
  }
  addProduct() {
    this.isAdd = true;
  }
  saveProduct() {
    this.invSvc.insertProduct(this.productForm.value).subscribe((response: any) => {
      if (response) {
        this.products.push(response.data);
        this.productForm.reset();
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
    })
  }

}
