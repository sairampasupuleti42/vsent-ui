import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  API_URL: string = "http://localhost/api";
  product: Inventory.Product;
  constructor(private httpSvc: HttpClient) { }
  //Products
  insertProduct(product?: Inventory.Product) {
    return this.httpSvc.post(`${this.API_URL}/product/add`, product);
  }
  putProduct(product?: Inventory.Product) {
    return this.httpSvc.post(`${this.API_URL}/product/update`, product);
  }
  fetchProducts() {
    return this.httpSvc.get(`${this.API_URL}/products`);
  }
  fetchProductById(id: number) {
    return this.httpSvc.get(`${this.API_URL}/product/${id}`);
  }
  deleteProductById(id: number) {
    return this.httpSvc.get(`${this.API_URL}/product/delete/${id}`);
  }
  //Variants
  insertVariant(variant?: Inventory.Variant) {
    return this.httpSvc.post(`${this.API_URL}/variant/add`, variant);
  }
  putVariant(variant?: Inventory.Variant) {
    return this.httpSvc.post(`${this.API_URL}/variant/update`, variant);
  }
  fetchVariants() {
    return this.httpSvc.get(`${this.API_URL}/variants`)
  }
  fetchVariantById(id: number) {
    return this.httpSvc.get(`${this.API_URL}/variant/${id}`);
  }
  deleteVariantById(id: number) {
    return this.httpSvc.get(`${this.API_URL}/variant/delete/${id}`);
  }


}
