import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  API_URL: string = "http://localhost/api/";
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
    return this.httpSvc.get(`${this.API_URL}/products`)
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


  mockProducts(): Observable<Inventory.Product[]> {
    return of(
      [
        {
          id: 1,
          image: 'https://place-hold.it/80x80',
          name: "COKE"
        },
        {
          id: 2,
          image: 'https://place-hold.it/80x80',
          name: "THUMSUP"
        }, {
          id: 3,
          image: 'https://place-hold.it/80x80',
          name: "THUMSUP CHARGE"
        }, {
          id: 4,
          image: 'https://place-hold.it/80x80',
          name: "LIMCA"
        }, {
          id: 5,
          image: 'https://place-hold.it/80x80',
          name: "SPRITE"
        }, {
          id: 6,
          image: 'https://place-hold.it/80x80',
          name: "FANTA"
        }]
    )
  }
  mockVariants(): Observable<any> {
    return of(
      [
        {
          id: 1,
          product: "COKE",
          name:"PET 200ML",
          cgst:14,
          sgst:14,
          css:12,
          per_case:24,
          quantity:250
        },
        {
          id: 2,
          product: "THUMSUP",
          name:"PET 200ML",
          cgst:14,
          sgst:14,
          css:12,
          per_case:24,
          quantity:250
        }, {
          id: 3,
          product: "THUMSUP CHARGE",
          name:"PET 200ML",
          cgst:14,
          sgst:14,
          css:12,
          per_case:24,
          quantity: 250
        }, {
          id: 4,
          product: "LIMCA",
          name:"PET 200ML",
          cgst:14,
          sgst:14,
          css:12,
          per_case:24,
          quantity:41
        }, {
          id: 5,
          product: "SPRITE",
          name:"PET 200ML",
          cgst:14,
          sgst:14,
          css:12,
          per_case:24,
          quantity:41
        }, {
          id: 6,
          product: "FANTA",
          name:"PET 200ML",
          cgst:14,
          sgst:14,
          css:12,
          per_case:24,
          quantity:20
        }]
    )
  }
}
