import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  { path:'shop', component: ShopComponent},
  { path:'cart', component:CartDetailComponent},
  {path:'checkout',component:CheckoutComponent},
  { path:'detail',component:ProductDetailComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  { path:'**', redirectTo:"/shop"}

 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
