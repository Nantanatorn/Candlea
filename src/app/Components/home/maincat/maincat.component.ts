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
    { id:1, name:'Bath & Body Works',  price:100, image:'assets/brand/cat1.png' },
    { id:2, name:'Yankee Candle',      price:100, image:'assets/brand/cat2.avif' },
    { id:3, name:'PartyLite',          price:100, image:'assets/brand/cat3.jpg' },
    { id:4, name:'Trudon',             price:100, image:'assets/brand/cat4.webp' },
    { id:5, name:'Diptyque',           price:100, image:'assets/brand/cat5.webp' },
  ];

  


  scrollByCard(dir: 1 | -1) {
    const el = this.scrollEl.nativeElement;
    // กว้างของการ์ด + gap (ตามใน HTML)
    const card = el.querySelector<HTMLElement>('[data-card]');
    const step = (card?.offsetWidth ?? 280) + 24; // 24px = gap-6
    el.scrollBy({ left: step * dir, behavior: 'smooth' });
  }
}
