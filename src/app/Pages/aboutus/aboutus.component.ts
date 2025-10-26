import { Component } from '@angular/core';

type Quality = {
  no: string;
  title: string;
  desc: string;
}
@Component({
  selector: 'app-aboutus',
  standalone: false,
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})


export class AboutusComponent {
    imageUrl: string | null = 'assets/oriCandle.png'
    qualities: Quality[] = [
    {
      no: '01',
      title: 'Premium Quality',
      desc: 'ผลิตจากวัตถุดิบธรรมชาติ เก็บกลิ่นอย่างนวลหอมเท่ากันทั่วห้องและสวยงาม',
    },
    {
      no: '02',
      title: 'Unique Scents',
      desc: 'แต่ละกลิ่นถูกสร้างสรรค์อย่างใส่ใจเพื่อบ่งบอกบรรยากาศที่โดดเด่นและน่าจดจำ',
    },
    {
      no: '03',
      title: 'Handcrafted with Care',
      desc: 'ทุกชิ้นถูกทำขึ้นด้วยมืออย่างประณีต ให้คงความงามและความทนทาน',
    },
    {
      no: '04',
      title: 'Creative Design',
      desc: 'ดีไซน์หรูที่ทำให้เป็นของแต่งบ้านสมบูรณ์แบบสำหรับการตกแต่งให้เกิดบรรยากาศพิเศษ',
    },
    {
      no: '05',
      title: 'Accessible Luxury',
      desc: 'สัมผัสความผ่อนคลายแบบลักซ์ชัวรีในราคาที่ทุกคนเข้าถึงได้',
    },
    {
      no: '06',
      title: 'Innovation in Aroma',
      desc: 'พัฒนากลิ่นใหม่อย่างต่อเนื่อง เพื่อมอบความสดชื่นและแรงบันดาลใจ',
    },
  ];

}
