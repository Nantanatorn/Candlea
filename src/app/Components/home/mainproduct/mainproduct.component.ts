import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductService } from '../../../Service/product.service';
import { Product } from '../../../Model/Product';




@Component({
  selector: 'app-mainproduct',
  standalone: false,
  templateUrl: './mainproduct.component.html',
  styleUrl: './mainproduct.component.css'
})
export class MainproductComponent implements OnInit{

  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // ดึงข้อมูลจาก service แล้วกรองเอาเฉพาะ 4 อันดับแรกตาม rating
    this.products$ = this.productService.getAll().pipe(
      map(products =>
        [...products] // clone array ป้องกัน mutation
          .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)) // เรียงจากมาก → น้อย
          .slice(0, 4) // เอาแค่ 4 ชิ้นแรก
      )
    );
  }
}
