import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../signup';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-update-prod',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,FormsModule],
  templateUrl: './update-prod.component.html',
  styleUrl: './update-prod.component.css'
})
export class UpdateProdComponent {

  constructor(private route:ActivatedRoute,private prodservice:ProductsService){}
  prod:undefined | product;
  ngOnInit(){
    let pid = this.route.snapshot.paramMap.get('id');
    console.warn(pid);
    pid && this.prodservice.getproduct(pid).subscribe((res)=>{
      console.warn(res);
      this.prod = res;
    })
  }
  updateproduct(data:product){
    if(this.prod)
    {
      data.id = this.prod.id;
    }
  console.warn(data);
  this.prodservice.updateProd(data).subscribe((res)=>{
    if(res){
    console.warn(res);
    }
  })
  Swal.fire("","Update Successfully","success")
  }

}
