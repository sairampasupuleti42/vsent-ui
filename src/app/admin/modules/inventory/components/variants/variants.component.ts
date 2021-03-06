import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../models/inventory';
import { InventoryService } from '../../service/inventory.service';

@Component({
  selector: 'vs-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {

  variants: Inventory.Variant[];

  constructor(private invSvc: InventoryService) { }

  ngOnInit() {
    console.log('service init')
    this.invSvc.mockVariants().subscribe((response: Inventory.Variant[]) => {
      this.variants = response;
    })
  }

}
