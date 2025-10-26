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
    iconUrl: 'assets/x.png'       // ใส่พาธรูปของคุณ
  },
  {
    title: 'High Quality',
    desc: 'เทียนทุกชิ้นทำด้วยความพิถีพิถัน ใส่ใจในรายละเอียด เพื่อให้กลิ่นหอมและการเผาไหม้สมบูรณ์แบบ',
    iconUrl: 'assets/feat1.png'
  },
  {
    title: 'Perfect for Gifting',
    desc: 'เหมาะสำหรับการสร้างบรรยากาศในบ้าน หรือมอบเป็นของขวัญพิเศษให้คนสำคัญ',
    iconUrl: 'assets/feat2.png'
  }
];
}
