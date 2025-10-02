import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  services = [
    { title: 'Gift Items', description: 'เทียนหอมสุดพิเศษเหมาะสำหรับเป็นของขวัญในทุกโอกาส' },
    { title: 'Office & Desk', description: 'เพิ่มความผ่อนคลายระหว่างการทำงานและไฟล์กลิ่นในบรรยากาศ' },
    { title: 'Seasonal Collection', description: 'คอลเลกชันพิเศษที่คัดสรรตามช่วงเทศกาลต่างๆ' },
    { title: 'Home Decor', description: 'เปลี่ยนบ้านให้ดูอบอุ่น ด้วยเทียนหอมที่สร้างบรรยากาศสุดหรู' },
    { title: 'Tableware', description: 'เทียนหอมสำหรับการจัดโต๊ะที่สวยงาม พร้อมบรรยากาศโรแมนติก' },
    { title: 'Garden & Outdoor', description: 'เพลิดเพลินกับกลิ่นหอมกลางแจ้ง พร้อมบรรยากาศที่สดชื่นและผ่อนคลาย' },
    { title: 'Wedding & Events', description: 'เพิ่มความโรแมนติกและความหรูหราให้กับวันพิเศษ' },
    { title: 'Wellness & Self-Care', description: 'ผ่อนคลายและคืนพลังด้วยเทียนหอมเพื่อการดูแลตนเอง' },
  ];
}
