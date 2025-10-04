import { Component } from '@angular/core';
import { CartService } from '../../../Service/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    mobileOpen = false;
    closeMobile() { this.mobileOpen = false; }
    constructor(public cart: CartService) {}

}
