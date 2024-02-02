import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-seller-add-prod',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,FormsModule],
  templateUrl: './seller-add-prod.component.html',
  styleUrl: './seller-add-prod.component.css'
})
export class SellerAddProdComponent {

}
