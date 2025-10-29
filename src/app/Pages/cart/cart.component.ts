import { Component } from '@angular/core';
import { CartService } from '../../Service/cart.service';
import { Observable } from 'rxjs';
import { CartItem } from '../../Model/CartItem';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    items$!: Observable<CartItem[]>;
  subtotal$!: Observable<number>;

  constructor(public cart: CartService, private router: Router) {}

  ngOnInit(): void {
    // กัน overlay ค้างถ้ามาจาก drawer
    this.cart.close?.();

    this.items$ = this.cart.items$;
    this.subtotal$ = this.cart.subtotal$;
  }

  // actions
  inc(id: string)    { this.cart.inc(id); }
  dec(id: string)    { this.cart.dec(id); }
  remove(id: string) { this.cart.remove(id); }
  clear()            { this.cart.clear(); }

  // ปุ่ม checkout
  onCheckout(): void {
    this.cart.close?.();
     
  }

  // ช่วย performance กับ *ngFor
  trackById = (_: number, i: CartItem) => i.id;
}