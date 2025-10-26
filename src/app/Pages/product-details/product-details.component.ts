import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/Product';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { ProductService } from '../../Service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$!: Observable<Product | undefined>;
  activeTab: 'overview' | 'info' = 'overview';
  related$!: Observable<Product[]>;           
  stars = [1,2,3,4,5];
  Math = Math;
  
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

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
        // ตัดสินค้าปัจจุบันออก
        const others = all.filter(p => p.id !== current.id);
        // สุ่มรายการโดยใช้ .sort(() => Math.random() - 0.5)
        const shuffled = others.sort(() => Math.random() - 0.5);
        // คืนค่ามา 5 ชิ้น
        return shuffled.slice(0, 4);
      })
    );

    window.scrollTo({ top: 0 });
  }
}
