import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { ServiceComponent } from './Pages/service/service.component';
import { CartComponent } from './Pages/cart/cart.component';

const routes: Routes = [
  {path: '',component: HomeComponent, pathMatch: 'full' },
  {path:'about',component: AboutusComponent},
  {path:'shop',component: ShopComponent},
  {path:'service',component: ServiceComponent},
  {path: 'checkout', component: CartComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
