import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-mainproduct',
  standalone: false,
  templateUrl: './mainproduct.component.html',
  styleUrl: './mainproduct.component.css'
})
export class MainproductComponent {

    products: Product[] = [
    { id: 1, name: 'Golden Aura Candle',    price: 499, image: 'assets/prod-1.jpg' },
    { id: 2, name: 'Aroma Glow Candle',     price: 599, image: 'assets/prod-2.jpg' },
    { id: 3, name: 'Blissful Essence Candle', price: 499, image: 'assets/prod-3.jpg' },
    { id: 4, name: 'Harmony Soy Candle',    price: 599, image: 'assets/prod-4.jpg' },
    { id: 5, name: 'Midnight Bloom Candle', price: 599, image: 'assets/prod-5.jpg' },
  ];

}
