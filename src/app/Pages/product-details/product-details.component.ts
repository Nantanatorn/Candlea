import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/Product';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { ProductService } from '../../Service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../../Model/CartItem';
import { CartService } from '../../Service/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   product$!: Observable<Product | undefined>;
  related$!: Observable<Product[]>;
  qty = 1;
  activeTab: 'overview' | 'info' = 'overview';
  stars = [1,2,3,4,5];
  Math = Math;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => this.productService.getById(params.get('id') || ''))
    );

    this.related$ = combineLatest([
      this.product$,
      this.productService.getAll()
    ]).pipe(
      map(([current, all]) => {
        if (!current) return [];
        const others = all.filter(p => p.id !== current.id);
        return others.sort(() => Math.random() - 0.5).slice(0, 4);
      })
    );
  }

  addToCart(p?: Product) {
    if (!p) return;
    const finalQty = Number(this.qty) || 1;

    const item: CartItem = {
      id: p.id,
      name: p.name,
      price: p.price,
      qty: finalQty,
      image: p.image,
      sku: p.sku
    };

    this.cart.add(item);
  }
}