import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 // mock data เริ่มต้น
  private _mockProducts: Product[] = [
      {
    id: 'p1',
    sku: 'BBW-001',
    name: 'Bath & Body Works – Japanese Cherry Blossom (Single-Wick Candle)',
    category: 'Scented Candle',
    description:
      'เทียนหอมกลิ่น Japanese Cherry Blossom จาก Bath & Body Works หอมหวานละมุนของดอกซากุระญี่ปุ่น ผสานกลิ่นไม้แซนเดิลวู้ดและมัสก์ ให้ความรู้สึกอ่อนโยนและโรแมนติก เหมาะสำหรับตกแต่งห้องนั่งเล่นหรือห้องนอน',
    price: 650,
    image: 'assets/products/bbw-japanese-cherry-blossom.png',
    stock: 20,
    scentNotes: ['Cherry Blossom', 'Sandalwood', 'Musk', 'Pear'],
    size: '198g (Single-Wick)',
    rating: 4.8
  },
  {
    id: 'p2',
    sku: 'BBW-002',
    name: 'Bath & Body Works – Warm Ocean Breeze (3-Wick Candle)',
    category: 'Scented Candle',
    description:
      'เทียนหอมแบบ 3 ไส้กลิ่น Warm Ocean Breeze จาก Bath & Body Works ให้กลิ่นหอมสะอาด สดชื่นเหมือนสายลมทะเลอุ่น ผสานกลิ่นเกลือทะเล มะพร้าว และไม้หอม',
    price: 950,
    image: 'assets/products/bbw-warm-ocean-breeze.png',
    stock: 18,
    scentNotes: ['Ocean Air', 'Sea Salt', 'Coconut', 'Amber Wood'],
    size: '411g (3-Wick)',
    rating: 4.9
  },
  {
    id: 'p3',
    sku: 'YC-301',
    name: 'Yankee Candle – Sparkling Cinnamon',
    category: 'Scented Candle',
    description:
      'เทียนหอมกลิ่นอบเชยหอมหวาน ผสานความอบอุ่นและความหอมเข้มข้นของไม้หอม เหมาะสำหรับฤดูหนาวหรือการตกแต่งบ้านให้มีบรรยากาศอบอุ่นสบาย',
    price: 790,
    image: 'assets/products/yankee-sparkling-cinnamon.jpg',
    stock: 20,
    scentNotes: ['Cinnamon Stick', 'Clove', 'Sweet Spice'],
    size: '623g',
    rating: 4.9
  },
  {
    id: 'p4',
    sku: 'YC-302',
    name: 'Yankee Candle – Vanilla Cupcake',
    category: 'Scented Candle',
    description:
      'เทียนหอมกลิ่นวานิลลาคัพเค้กหอมหวานละมุน มีโน้ตของน้ำตาลและบัตเตอร์ครีม ให้บรรยากาศอบอุ่นและสบายในทุกพื้นที่',
    price: 790,
    image: 'assets/products/yankee-vanilla-cupcake.jpg',
    stock: 25,
    scentNotes: ['Vanilla', 'Buttercream', 'Sugar Frosting'],
    size: '623g',
    rating: 4.8
  },
  {
    id: 'p5',
    sku: 'YC-201',
    name: 'Yankee Candle – Clean Cotton',
    category: 'Yankee Candle',
    description: 'กลิ่นหอมสะอาดของผ้าฝ้ายซักใหม่ที่เป็นเอกลักษณ์ของ Yankee Candle',
    price: 690,
    image: 'assets/products/yankee-cotton.jpg',
    stock: 40,
    scentNotes: ['Cotton', 'White Flower', 'Fresh Linen'],
    size: '411g',
    rating: 4.9
  },
  {
    id: 'p6',
    sku: 'YC-202',
    name: 'Yankee Candle – Midnight Jasmine',
    category: 'Yankee Candle',
    description: 'เทียนหอมกลิ่นดอกมะลิยามค่ำคืนจาก Yankee Candle สร้างบรรยากาศโรแมนติกนุ่มนวล',
    price: 720,
    image: 'assets/products/yankee-jasmine.jpg',
    stock: 35,
    scentNotes: ['Jasmine', 'Neroli', 'Honeysuckle'],
    size: '411g',
    rating: 4.8
  },
  {
    id: 'p7',
    sku: 'PL-301',
    name: 'PartyLite – Cinnamon Woods',
    category: 'PartyLite',
    description: 'เทียนหอมจาก PartyLite ผสมกลิ่นอบเชยและไม้แห้ง ให้ความรู้สึกอบอุ่นและหรูหรา',
    price: 650,
    image: 'assets/products/partylite-cinnamon.jpg',
    stock: 18,
    scentNotes: ['Cinnamon', 'Cedarwood', 'Clove'],
    size: '300g',
    rating: 4.6
  },
  {
    id: 'p8',
    sku: 'TR-401',
    name: 'Trudon – Abd El Kader',
    category: 'Trudon',
    description: 'เทียนหอมสุดหรูจาก Cire Trudon กลิ่นมินต์สดชื่นและขิงเผ็ดร้อน สะท้อนความสง่างามในทุกมิติ',
    price: 1350,
    image: 'assets/products/Abd El Kader.webp',
    stock: 10,
    scentNotes: ['Mint', 'Ginger', 'Tobacco'],
    size: '270g',
    rating: 5.0
  },
  {
    id: 'p9',
    sku: 'DP-501',
    name: 'Diptyque – Baies',
    category: 'Diptyque',
    description: 'กลิ่นผลเบอร์รี่ดำและดอกกุหลาบจาก Diptyque ที่ให้กลิ่นหอมหวานหรูหรา เป็นเอกลักษณ์เฉพาะตัว',
    price: 1550,
    image: 'assets/products/Baies (Berries).webp',
    stock: 8,
    scentNotes: ['Blackcurrant', 'Rose', 'Green Leaves'],
    size: '190g',
    rating: 4.9
  },
  {
    id: 'p10',
    sku: 'DP-502',
    name: 'Diptyque – Feu de Bois',
    category: 'Diptyque',
    description: 'เทียนหอมกลิ่นไม้ไฟจาก Diptyque ให้ความรู้สึกเหมือนนั่งข้างเตาผิงในฤดูหนาว',
    price: 1590,
    image: 'assets/products/Feu de Bois (Wood Fire).webp',
    stock: 6,
    scentNotes: ['Cedarwood', 'Birch', 'Smoky Notes'],
    size: '190g',
    rating: 4.9
  }
  ];

  private products$ = new BehaviorSubject<Product[]>(this._mockProducts);

  constructor() {}

  // ดึงสินค้าทั้งหมด
  getAll(): Observable<Product[]> {
    return this.products$.asObservable();
  }

  // ดึงสินค้าตาม id
  getById(id: string): Observable<Product | undefined> {
    const found = this.products$.value.find(p => p.id === id);
    return of(found);
  }
}
