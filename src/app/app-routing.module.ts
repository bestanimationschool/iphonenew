import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './apple/cart/cart.component';
import { IphoneComponent } from './apple/iphone/iphone.component';
import { StoreComponent } from './apple/store/store.component';
import { SupportComponent } from './apple/support/support.component';

const routes: Routes = [
  { path: '', redirectTo: 'iphone', pathMatch: 'full' },
  { path: 'iphone', component: IphoneComponent },
  { path: 'store', component: StoreComponent },
  { path: 'support', component: SupportComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
