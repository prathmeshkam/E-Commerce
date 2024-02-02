import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, matFormFieldAnimations } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,MatToolbarModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menuType:string = 'default';
sellerName:string = '';
constructor(private router:Router){}

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
}

logout()
{
  localStorage.removeItem("seller");
  this.router.navigate(['']);
}
}
