import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product, products } from '../signup';
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

  getproduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }

  updateProd(product:product){
    
    console.warn(product.id);
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product);
    
  }

  popularProd(){
    return this.http.get<product[]>("http://localhost:3000/products?_limit=3");
    }

  trendProd(){
    return this.http.get<product[]>("http://localhost:3000/products?_limit=6");
  }
}
