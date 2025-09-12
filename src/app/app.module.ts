import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { ServiceComponent } from './Pages/service/service.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ShopComponent,
    ServiceComponent,
    ProductDetailsComponent
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
