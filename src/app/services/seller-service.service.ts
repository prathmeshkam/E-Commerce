import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signup } from '../signup';
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  localStorage: Storage = window.localStorage;
  loginError = new EventEmitter<boolean>(false);
  constructor(private http:HttpClient,private router:Router) {localStorage.setItem('isSellerLogedIn','false') }
  // isSellerLogedIn = new BehaviorSubject<boolean>(false);
  userSignIn(data:signup)
  {
    this.http.post("http://localhost:3000/seller",data,{observe:'response'}).subscribe((res)=>{
    
    this.localStorage.setItem('isSellerLogedIn','true');
    this.localStorage.setItem("seller",JSON.stringify(res.body))
    this.router.navigate(['seller-home']);
  })
  }

  // reloadSeller()
  // {
  //   if(this.localStorage.getItem('seller'))
  //   {
  //   this.localStorage.setItem('isSellerLogedIn','true');
  //   this.router.navigate(['seller-home']);
  //   }
  // }
 

  sellerLogin(data:login)
  {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((res:any)=>{
      console.warn(res);
      if(res && res.body && res.body.length){
        this.localStorage.setItem("seller",JSON.stringify(res.body))
        this.router.navigate(['seller-home']);
      }
      else{
        console.warn("Login Failed");
        this.loginError.emit(true);
      }
    })
  }
}
