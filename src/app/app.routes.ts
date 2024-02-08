import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { sellerAuthGuard } from './guards/seller-auth.guard';
import { SellerAddProdComponent } from './seller-add-prod/seller-add-prod.component';
import { UpdateProdComponent } from './update-prod/update-prod.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'seller',component:SellerAuthComponent},
    {path:'seller-home',component:SellerHomeComponent , canActivate:[sellerAuthGuard]},
    {path:'seller-add-prod',component:SellerAddProdComponent , canActivate:[sellerAuthGuard]},
    {path:'seller-update-prod/:id',component:UpdateProdComponent},
    
];
