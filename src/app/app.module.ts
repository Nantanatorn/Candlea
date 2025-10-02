import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { ServiceComponent } from './Pages/service/service.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { BgComponent } from './Components/home/bg/bg.component';
import { MaincatComponent } from './Components/home/maincat/maincat.component';
import { MainabountComponent } from './Components/home/mainabount/mainabount.component';
import { MainproductComponent } from './Components/home/mainproduct/mainproduct.component';
import { CartComponent } from './Pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ShopComponent,
    ServiceComponent,
    ProductDetailsComponent,
    BgComponent,
    MaincatComponent,
    MainabountComponent,
    MainproductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
