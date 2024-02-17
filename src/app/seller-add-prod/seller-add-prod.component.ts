import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { products } from '../signup';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-seller-add-prod',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,FormsModule],
  templateUrl: './seller-add-prod.component.html',
  styleUrl: './seller-add-prod.component.css'
})
export class SellerAddProdComponent {

  constructor(private prodservice:ProductsService,private router:Router){}
taskid:number = 0;
addproduct(data:products)
{
  this.prodservice.addproducts(data).subscribe((res)=>{
    console.warn(res);
    if(res)
    {
      Swal.fire("","Product added successfully","success");
    }
    this.taskid++;
  });
  this.router.navigate(['seller-home'])
  
}


}
