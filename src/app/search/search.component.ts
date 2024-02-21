import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { product } from '../signup';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

constructor(private activeRoute:ActivatedRoute , private service:ProductsService){};

searchProd:product[] | undefined;
  ngOnInit():void{
    let query = this.activeRoute.snapshot.paramMap.get('query')
    query && this.service.searchProd(query).subscribe((res:any)=>{
      this.searchProd = res;

      console.warn(query);
    })
    
  }

  
}
