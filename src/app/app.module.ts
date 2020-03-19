import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuyerComponent } from './buyer/buyer.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FashionComponent } from './fashion/fashion.component';
import { WomensubComponent } from './womensub/womensub.component';
import { KidsubComponent } from './kidsub/kidsub.component';
import { FursubComponent } from './fursub/fursub.component';
import { MensubComponent } from './mensub/mensub.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SellerComponent } from './seller/seller.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { LbuyerComponent } from './lbuyer/lbuyer.component';
import { LsellerComponent } from './lseller/lseller.component';
import { HttpClientModule } from '@angular/common/http';
import { SpasswordComponent } from './spassword/spassword.component';
import { SloginComponent } from './slogin/slogin.component';
import { PaylistComponent } from './paylist/paylist.component';
import { SuccesspayComponent } from './successpay/successpay.component';
import { CategoryComponent } from './category/category.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BuyerComponent,
    HomeComponent,
    ForgetpasswordComponent,
    FashionComponent,
    MensubComponent,
    WomensubComponent,
    KidsubComponent,
    FursubComponent,
    ElectronicComponent,
    ContactusComponent,
    CartComponent,
    PaymentComponent,
    SellerComponent,
    AddproductComponent,
    RemoveproductComponent,
    LbuyerComponent,
    LsellerComponent,
    SpasswordComponent,
    SloginComponent,
    PaylistComponent,
    SuccesspayComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
