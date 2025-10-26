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
  countries: any[] = [];
    cart: CartItem[] = [
    { name: 'Yankee Candle – Sparkling Cinnamon', price: 790, qty: 1, image: 'assets/products/yankee-sparkling-cinnamon.jpg' },
    { name: 'Diptyque – Feu de Bois', price: 1590, qty: 1, image: 'assets/products/Feu de Bois (Wood Fire).webp' },
  ];

  get subtotal() {
    return this.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }

   

}
