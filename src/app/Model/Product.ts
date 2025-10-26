export interface Product {
  id: string;              // ex. "p1"
  sku: string;             // ex. "CND-101"
  name: string;            // ex. "Aromatic Candle"
  category: string;        // ex. "Scented Candle"
  description: string;     // รายละเอียดสินค้า
  price: number;           // ex. 500
  image: string;           // path รูปภาพ
  stock?: number;          // จำนวนคงเหลือ (optional)
  scentNotes?: string[];   // กลิ่น/โน้ตกลิ่น เช่น ['Jasmine', 'Sandalwood']
  size?: string;           // ex. "200g"
  rating?: number;         // ex. 4.8
}