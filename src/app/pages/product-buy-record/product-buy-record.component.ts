import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-buy-record',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardModule, MatChipsModule, [NgFor], MatButtonModule],
  templateUrl: './product-buy-record.component.html',
  styleUrl: './product-buy-record.component.css'
})
export class ProductBuyRecordComponent {

  constructor(private service: UserServiceService, private router: Router) {
    this.LoadTradeSalesProduct();
  }

  productTradePurchaseList: any;
  userLoggedIn = sessionStorage.getItem('username');

  LoadTradeSalesProduct() {
    this.service.GetAllProductTradeSalesBuyerList().subscribe((res: any) => {
      this.productTradePurchaseList = res.filter((response: {buyer: any}) => response.buyer === this.userLoggedIn);
    });
  }

}
