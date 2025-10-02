import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products = [
    { name: 'Aroma Glow Candle', price: 599 },
    { name: 'Serenity Jar Candle', price: 699 },
    { name: 'Blissful Essence Candle', price: 799 },
    { name: 'Luxe Scented Pillar', price: 1099 },
    { name: 'Harmony Soy Candle', price: 399 },
    { name: 'Eternal Bloom Candle', price: 559 },
    { name: 'Midnight Calm Candle', price: 579 },
    { name: 'Golden Aura Candle', price: 1299 },
  ];
}
