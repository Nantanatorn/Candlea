// src/app/services/service-candle.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Service } from '../Model/Service'; 

@Injectable({ providedIn: 'root' })
export class ServiceCandleService {
  // ✅ ชื่อให้สื่อความหมายตรงกับข้อมูล
  private readonly _mockServices: Service[] = [
    { title: 'Gift Items', description: 'เทียนหอมสุดพิเศษเหมาะสำหรับเป็นของขวัญในทุกโอกาส', image: 'assets/candle services/gift.jpg' },
    { title: 'Office & Desk', description: 'เพิ่มความผ่อนคลายระหว่างการทำงานและไฟล์กลิ่นในบรรยากาศ', image: 'assets/candle services/office.jpg' },
    { title: 'Seasonal Collection', description: 'คอลเลกชันพิเศษที่คัดสรรตามช่วงเทศกาลต่างๆ', image: 'assets/candle services/seasonal.jpg' },
    { title: 'Home Decor', description: 'เปลี่ยนบ้านให้ดูอบอุ่น ด้วยเทียนหอมที่สร้างบรรยากาศสุดหรู', image: 'assets/candle services/home.jpg' },
    { title: 'Tableware', description: 'เทียนหอมสำหรับการจัดโต๊ะที่สวยงาม พร้อมบรรยากาศโรแมนติก', image: 'assets/candle services/tableware.jpg' },
    { title: 'Garden & Outdoor', description: 'เพลิดเพลินกับกลิ่นหอมกลางแจ้ง พร้อมบรรยากาศที่สดชื่นและผ่อนคลาย', image: 'assets/candle services/garden.jpg' },
    { title: 'Wedding & Events', description: 'เพิ่มความโรแมนติกและความหรูหราให้กับวันพิเศษ', image: 'assets/candle services/wedding.jpg' },
    { title: 'Wellness & Self-Care', description: 'ผ่อนคลายและคืนพลังด้วยเทียนหอมเพื่อการดูแลตนเอง', image: 'assets/candle services/wellness.jpg' },
  ];

  // ✅ ชื่อ stream เป็นพหูพจน์
  private readonly services$ = new BehaviorSubject<Service[]>([...this._mockServices]);

  constructor() {}

  /** ดึงทั้งหมดเป็น Observable (ไว้ให้ component subscribe) */
  getAllServices(): Observable<Service[]> {
    return this.services$.asObservable();
  }

  /** snapshot ปัจจุบัน (ใช้ภายใน service เท่านั้น) */
  private get value(): Service[] {
    return this.services$.value;
  }

  /** utility: สร้าง slug จาก title (กัน space/อักษรพิเศษ) */
  private toSlug(title: string): string {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9ก-๙\s-]/gi, '')
      .replace(/\s+/g, '-');
  }

  /** ดึงตาม title (ใช้ง่ายตอนนี้) */
  getServiceByTitle(title: string): Observable<Service | undefined> {
    return of(this.value.find(s => s.title === title));
  }

  /** ดึงตาม slug (เหมาะกับ router: /services/:slug) */
  getServiceBySlug(slug: string): Observable<Service | undefined> {
    return of(this.value.find(s => this.toSlug(s.title) === slug));
  }

  /** เพิ่ม service ใหม่ (กัน slug ชนด้วย title เดิม) */
  add(service: Service): void {
    // กันซ้ำง่าย ๆ ด้วย title
    if (this.value.some(s => s.title === service.title)) {
      throw new Error(`Service title "${service.title}" already exists.`);
    }
    this.services$.next([...this.value, service]);
  }

  /** อัปเดตตาม title */
  update(title: string, patch: Partial<Service>): void {
    this.services$.next(
      this.value.map(s => (s.title === title ? { ...s, ...patch } : s))
    );
  }

  /** ลบตาม title */
  remove(title: string): void {
    this.services$.next(this.value.filter(s => s.title !== title));
  }
}
