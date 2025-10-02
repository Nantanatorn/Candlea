import { Component, ViewChild, ElementRef } from '@angular/core';

type Item = { id:number; name:string; price:number; image:string };

@Component({
  selector: 'app-maincat',
  standalone: false,
  templateUrl: './maincat.component.html',
  styleUrl: './maincat.component.css'
})
export class MaincatComponent {
    @ViewChild('scrollEl', { static: true }) scrollEl!: ElementRef<HTMLDivElement>;

  items: Item[] = [
    { id:1, name:'Glowly',        price:100, image:'assets/cat-1.jpg' },
    { id:2, name:'Mellow Melt',   price:100, image:'assets/cat-2.jpg' },
    { id:3, name:'Fluffy Flame',  price:100, image:'assets/cat-3.jpg' },
    { id:4, name:'Lumina',        price:100, image:'assets/cat-4.jpg' },
    { id:5, name:'Sparkly Wick',  price:100, image:'assets/cat-5.jpg' },
    { id:6, name:'Calm Cedar',    price:100, image:'assets/cat-6.jpg' },
  ];

  scrollByCard(dir: 1 | -1) {
    const el = this.scrollEl.nativeElement;
    // กว้างของการ์ด + gap (ตามใน HTML)
    const card = el.querySelector<HTMLElement>('[data-card]');
    const step = (card?.offsetWidth ?? 280) + 24; // 24px = gap-6
    el.scrollBy({ left: step * dir, behavior: 'smooth' });
  }
}
