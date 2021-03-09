import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as e } from 'src/environments/environment';
import { Inventory } from '../models/inventory';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  product: Inventory.Product;
  constructor(private httpSvc: HttpClient) { }
  //Products
  insertProduct(product?: Inventory.Product) {
    return this.httpSvc.post(`${e.apiUrl}/product/add`, product);
  }
  putProduct(product?: Inventory.Product) {
    return this.httpSvc.post(`${e.apiUrl}/product/update`, product);
  }
  fetchProducts() {
    return this.httpSvc.get(`${e.apiUrl}/products`);
  }
  fetchProductById(id: number) {
    return this.httpSvc.get(`${e.apiUrl}/product/${id}`);
  }
  deleteProductById(id: number) {
    return this.httpSvc.get(`${e.apiUrl}/product/delete/${id}`);
  }
  //Variants
  insertVariant(variant?: Inventory.Variant) {
    return this.httpSvc.post(`${e.apiUrl}/variant/add`, variant);
  }
  putVariant(variant?: Inventory.Variant) {
    return this.httpSvc.post(`${e.apiUrl}/variant/update`, variant);
  }
  fetchVariants() {
    return this.httpSvc.get(`${e.apiUrl}/variants`)
  }
  fetchVariantById(id: number) {
    return this.httpSvc.get(`${e.apiUrl}/variant/${id}`);
  }
  deleteVariantById(id: number) {
    return this.httpSvc.get(`${e.apiUrl}/variant/delete/${id}`);
  }


}
