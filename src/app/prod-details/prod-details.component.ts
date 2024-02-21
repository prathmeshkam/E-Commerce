import { Component , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../signup';

@Component({
  selector: 'app-prod-details',
  standalone: true,
  imports: [],
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.css'
})
export class ProdDetailsComponent {
constructor(private route:ActivatedRoute, private service:ProductsService){};
details:undefined | product[];
ngOnInit():void{
  let p = this.route.snapshot.paramMap.get('pid');
  this.service.details(p).subscribe((res)=>{
    this.details = res;
  })
}
}
