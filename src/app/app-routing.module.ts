import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuyerComponent } from './buyer/buyer.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { FashionComponent } from './fashion/fashion.component';
import { LbuyerComponent } from './lbuyer/lbuyer.component';
import { WomensubComponent } from './womensub/womensub.component';
import { KidsubComponent } from './kidsub/kidsub.component';
import { FursubComponent } from './fursub/fursub.component';
import { CartComponent } from './cart/cart.component';
import { MensubComponent } from './mensub/mensub.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentComponent } from './payment/payment.component';
import { SellerComponent } from './seller/seller.component';
import { LsellerComponent } from './lseller/lseller.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SpasswordComponent } from './spassword/spassword.component';
import { SloginComponent } from './slogin/slogin.component';
import { PaylistComponent } from './paylist/paylist.component';
import { SuccesspayComponent } from './successpay/successpay.component';
import { CategoryComponent } from './category/category.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
   {path:"reg/login",component:LoginComponent},
   {path:"sreg/slogin",component:SloginComponent},
  {path:"fp",component:ForgetpasswordComponent},
  {path:"reg",component:RegisterComponent},
  {path:"buyer",component:BuyerComponent},
  {path:"fp/buyer",component:BuyerComponent},
  {path:"cat",component:CategoryComponent},
  {path:"fp/buyer/bl",component:LbuyerComponent},
  {path:"fashion",component:FashionComponent},
  {path:"fashion/ws",component:WomensubComponent},
  {path:"fashion/msub",component:MensubComponent},
  {path:"fashion/ksub",component:KidsubComponent},
  {path:"fsub",component:FursubComponent},
  {path:"esub",component:ElectronicComponent},
  {path:"contact",component:ContactusComponent},
  {path:"cart",component:CartComponent},
  {path:"fashion/msub/cart",component:CartComponent},
  {path:"payment",component:PaymentComponent},
  {path:"seller",component:SellerComponent},
  {path:"sfp/seller",component:SellerComponent},
  {path:"sfp/seller/sl",component:LsellerComponent},
  {path:"ap",component:AddproductComponent},
  {path:"buyer/bl",component:LbuyerComponent},
  {path:"reg/login/bl",component:LbuyerComponent},
  {path:"seller/sl",component:LsellerComponent},
  {path:"sreg/slogin/sl",component:LsellerComponent},
  {path:"spay",component:PaylistComponent },
  {path:"sfp",component:SpasswordComponent },
  {path:"payment/pays",component:SuccesspayComponent  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
