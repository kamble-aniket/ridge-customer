import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
@NgModule({
  declarations: [ShopComponent,CartComponent, CheckoutComponent,PaymentComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule],
})
export class ShopModule {}