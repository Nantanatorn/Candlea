import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import {  CartService } from '../../../Service/cart.service';
import { CartItem } from '../../../Model/CartItem';

@Component({
  selector: 'app-cart-drawer',
  standalone: false,
  templateUrl: './cart-drawer.component.html',
  styleUrl: './cart-drawer.component.css'
})
export class CartDrawerComponent {
   open$!: Observable<boolean>;
  items$!: Observable<CartItem[]>;

  constructor(public cart: CartService) {
    // ✅ กำหนดค่าหลังจาก cart ถูก inject แล้ว
    this.open$ = this.cart.open$;
    this.items$ = this.cart.items$;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.cart.close();
  }

  trackById = (_: number, i: CartItem) => i.id;
}