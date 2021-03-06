import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { VariantsComponent } from './components/variants/variants.component';
import { DailySettingsComponent } from './components/daily-settings/daily-settings.component';
import { UpdateInventoryComponent } from './components/update-inventory/update-inventory.component';
import { InventoryChangesComponent } from './components/inventory-changes/inventory-changes.component';
import { CommissionsComponent } from './components/commissions/commissions.component';

@NgModule({
  declarations: [ProductsComponent, VariantsComponent, DailySettingsComponent, UpdateInventoryComponent, InventoryChangesComponent, CommissionsComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
