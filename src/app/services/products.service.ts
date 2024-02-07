import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../signup';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  addproducts(data:products)
  {

    return this.http.post('http://localhost:3000/products',data);
  }

  productList()
  {
    return this.http.get<products[]>("http://localhost:3000/products");
  }

  deleteProd(id:string)
  {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
  