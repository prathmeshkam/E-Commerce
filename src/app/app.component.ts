import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerService } from './services/seller-service.service';
import { SellerAddProdComponent } from './seller-add-prod/seller-add-prod.component';
import { ProductsService } from './services/products.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateProdComponent } from './update-prod/update-prod.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,
            HomeComponent,SellerAuthComponent,FormsModule,HttpClientModule,SellerHomeComponent,SellerAddProdComponent,FontAwesomeModule
          ,UpdateProdComponent,FooterComponent,SearchComponent,ProdDetailsComponent],
  providers:[SellerService,ProductsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecom';
}
