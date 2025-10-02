import { Component } from '@angular/core';

@Component({
  selector: 'app-mainabount',
  standalone: false,
  templateUrl: './mainabount.component.html',
  styleUrl: './mainabount.component.css'
})
export class MainabountComponent {
       features = [
    {
      title: 'Natural Ingredients',
      desc: 'ใช้วัตถุดิบจากธรรมชาติ ปลอดภัยต่อสุขภาพ และเป็นมิตรต่อสิ่งแวดล้อม',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18l-1 9H4L3 3z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 16a2 2 0 11-4 0 2 2 0 014 0zM8 16a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>`
    },
    {
      title: 'High Quality',
      desc: 'เทียนทุกชิ้นทำด้วยความพิถีพิถัน ใส่ใจในรายละเอียด เพื่อให้กลิ่นหอมและการเผาไหม้สมบูรณ์แบบ',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.79-3 4s1.343 4 3 4 3-1.79 3-4-1.343-4-3-4z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>`
    },
    {
      title: 'Perfect for Gifting',
      desc: 'เหมาะสำหรับการสร้างบรรยากาศในบ้าน หรือมอบเป็นของขวัญพิเศษให้คนสำคัญ',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4m0 0l8-8m-8 8l8 8" />
            </svg>`
    }
  ];
}
