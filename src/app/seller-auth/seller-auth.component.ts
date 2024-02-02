import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { login, signup } from '../signup';
import { SellerService } from '../services/seller-service.service';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,MatCardModule,MatFormFieldModule,MatButtonModule,SweetAlert2Module],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
constructor(private sellerservice:SellerService,private router:Router){}
ErrorLogin:string='';
signUp(data:signup):void
{
this.sellerservice.userSignIn(data);
}

// ngOnInit(){
//   this.sellerservice.reloadSeller();
// }


loginCheck:boolean = false;
openLogin()
{
this.loginCheck = !this.loginCheck;
}
openSignup()
{
this.loginCheck =  !this.loginCheck;
}


loginUser(data:login):void{
this.sellerservice.sellerLogin(data);
this.sellerservice.loginError.subscribe((isError)=>{
  if(isError)
  {
    Swal.fire("","Oops !! Email or password incorrect","error");
  }
})
{

}
}


}
