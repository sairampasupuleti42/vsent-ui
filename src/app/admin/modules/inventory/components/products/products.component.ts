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
    this.invSvc.mockProducts().subscribe((response: Inventory.Product[]) => {
      this.products = response;
    })
  }

}
