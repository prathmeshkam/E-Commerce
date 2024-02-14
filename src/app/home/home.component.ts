import { Component , OnInit} from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../services/products.service';
import { product} from '../signup';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  popularProd : undefined | product[];
  trendyProd : undefined | product[];
  constructor(private prodservice: ProductsService){}
  

  ngOnInit():void
  {
    this.prodservice.popularProd().subscribe((p)=>{
      this.popularProd = p;
    })
    this.prodservice.trendProd().subscribe((res)=>{
      this.trendyProd = res;
    })
  
  }




}
