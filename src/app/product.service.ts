import { HttpClient } from '@angular/common/http';
import {   Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getProducts():Observable<Array<IProduct>>{
    return inject(HttpClient).get<Array<IProduct>>('https://fakestoreapi.com/products')
  }
}
