import { Component } from '@angular/core';
import { CartService } from '../../../Service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    mobileOpen = false;
    totalQty$: Observable<number>;
    closeMobile() { this.mobileOpen = false; }
    constructor(public cart: CartService) {
    this.totalQty$ = this.cart.totalQty$; 
  }

}
