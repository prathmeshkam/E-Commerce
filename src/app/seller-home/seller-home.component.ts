import { Component,OnInit } from '@angular/core';
import { products } from '../signup';
import { ProductsService } from '../services/products.service';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

export interface PeriodicElement {
  name:string,
  price:number,
  company:string,
  color:string,
  description:string,
  url:string
}

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [MatTableModule,MatIconModule],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})



export class SellerHomeComponent implements OnInit {
list:products[] = [];
constructor(private productservice:ProductsService){}


sr:number = this.list.length;
ngOnInit():void{
this.refresh();
}

displayedColumns: string[] = ['name', 'price', 'company', 'color','description','img','action'];


isProdDelete:undefined | string;
deleteProd(id:string)
{
 

  this.productservice.deleteProd(id).subscribe((res)=>{
    if(res)
    {
      this.isProdDelete = "Product deleted successfully";
      this.refresh();
    }
    setTimeout(()=>{
      this.isProdDelete = undefined
    },1000)
  })
}

refresh(){
  this.productservice.productList().subscribe((res)=>{
    console.warn(res);
    this.list = res;
  })
}
}


