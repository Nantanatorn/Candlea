import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Service/product.service';
import { Product } from '../../Model/Product';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']   // ✅ แก้เป็น styleUrls
})
export class ShopComponent implements OnInit {
  // UI helpers
  stars = [1, 2, 3, 4, 5];
  Math = Math;

  // page & filters
  page = 1;
  readonly pageSize = 8;

  private page$ = new BehaviorSubject<number>(1);
  private sort$ = new BehaviorSubject<string>('');          // '', 'low-high', 'high-low'
  private rating$ = new BehaviorSubject<number | null>(null); // null = no filter
  private brand$ = new BehaviorSubject<string>('');         // '' = all

  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const all$ = this.productService.getAll();

    this.products$ = combineLatest([all$, this.sort$, this.rating$, this.brand$, this.page$]).pipe(
      map(([products, sort, rating, brand, page]) => {
        let list = [...products];

        // 1) Filter (ถ้าเลือก)
        if (rating != null) {
          list = list.filter(p => Math.round(p.rating ?? 0) >= rating);
        }
        if (brand) {
          list = list.filter(p => (p.category ?? '').toLowerCase() === brand.toLowerCase());
        }

        // 2) Sort
        if (sort === 'low-high') {
          list.sort((a, b) => a.price - b.price);
        } else if (sort === 'high-low') {
          list.sort((a, b) => b.price - a.price);
        }

        // 3) Pagination
        const start = (page - 1) * this.pageSize;
        return list.slice(start, start + this.pageSize);
      })
    );
  }

  // ===== handlers =====
  setSort(v: string) {
    this.sort$.next(v);
    this.resetToFirstPage();
  }

  setRating(v: string) {
    const val = v ? parseInt(v, 10) : null;
    this.rating$.next(Number.isNaN(val as number) ? null : (val as number));
    this.resetToFirstPage();
  }

  setBrand(v: string) {
    this.brand$.next(v || '');
    this.resetToFirstPage();
  }

  nextPage() {
    this.page++;
    this.page$.next(this.page);
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.page$.next(this.page);
    }
  }

  private resetToFirstPage() {
    this.page = 1;
    this.page$.next(1);
  }
}
