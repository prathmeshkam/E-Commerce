import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { sellerAuthGuard } from './guards/seller-auth.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'seller',component:SellerAuthComponent},
    {path:'seller-home',component:SellerHomeComponent , canActivate:[sellerAuthGuard]},
];
