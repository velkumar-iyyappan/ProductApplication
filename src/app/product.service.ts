import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   productsUrl:string = 'http://localhost:5214/api/product/';

  constructor(private http: HttpClient) { }

  getProducts()
  {
    debugger;
    var data = this.http.get(this.productsUrl);    
    return data;
  }

  createProduct(data:any)
  {
    var response = this.http.post(this.productsUrl, data);
    return response;  
  }

  deleteProduct(id:any)
  {
    var response = this.http.delete(this.productsUrl+id);
    return response;  
  }

  
  updateProduct(id:any,updatedUser:any)
  {
    updatedUser = { ...updatedUser, id: id};
    var response = this.http.put(this.productsUrl, updatedUser);
    return response;  
  }
  
}
