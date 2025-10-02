import { Component } from '@angular/core';

interface CartItem {
  name: string;
  qty: number;
  price: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
    cart: CartItem[] = [
    { name: 'Harmony Soy Candle', qty: 1, price: 239, image: 'assets/prod-1.jpg' },
    { name: 'Luxe Scented Pillar', qty: 1, price: 399, image: 'assets/prod-2.jpg' },
    { name: 'Eternal Bloom Candle', qty: 1, price: 499, image: 'assets/prod-3.jpg' },
  ];

  get subtotal() {
    return this.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }
}
