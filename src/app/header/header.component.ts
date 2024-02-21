import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, matFormFieldAnimations } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { products } from '../signup';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,MatToolbarModule,MatFormFieldModule,MatButtonModule,FormsModule,SearchPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menuType:string = 'default';
dataSearch:undefined | products[];
searchText = '';
sellerName:string = '';
constructor(private router:Router,private service:ProductsService){}

ngOnInit():void{
  this.router.events.subscribe((val:any)=>{
    if(val.url)
    {
      if(localStorage.getItem('seller') && val.url.includes('seller'))
      {
        console.warn("In seller area");
        this.menuType = 'seller';
        if(localStorage.getItem('seller'))
        {
          let sData = localStorage.getItem('seller');
          let sName = sData && JSON.parse(sData)[0];
          this.sellerName = sName.name;
        }
      }
      else{
        console.warn("Outside seller");
        this.menuType = 'default';
      }
    }
  })


  this.service.productList().subscribe((res)=>{
    this.dataSearch = res;
    console.warn(this.dataSearch);
  })

}

logout()
{
  localStorage.removeItem("seller");
  this.router.navigate(['']);
}


submitSearch(data:any)
{
  console.warn(data);
  this.router.navigate([`search-prod/${data}`])
}

refreshPage() {
  location.reload();
}






















}
