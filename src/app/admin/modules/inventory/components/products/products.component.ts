import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../models/inventory';
import { InventoryService } from '../../service/inventory.service';

@Component({
  selector: 'vs-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Inventory.Product[];

  constructor(private invSvc: InventoryService) { }

  ngOnInit() {
    console.log('service init')
    this.invSvc.fetchProducts().subscribe((response: any) => {
      this.products = response?.data;
    })
  }
  deleteProduct(id) {
    this.invSvc.deleteProductById(id).subscribe(response => {
      this.products.slice(id);
    })
  }

}
