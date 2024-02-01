import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { signup } from '../signup';
import { SellerService } from '../services/seller-service.service';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,MatCardModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {
  constructor(private sellerservice:SellerService,private router:Router){}

signUp(data:signup):void
{
this.sellerservice.userSignIn(data);
}

// ngOnInit(){
//   this.sellerservice.reloadSeller();
// }
}
