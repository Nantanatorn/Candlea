export interface CartItem {
  id: string;        // ใช้ product.id ให้คีย์ซ้ำแล้วบวก qty ได้
  name: string;
  price: number;     // ราคาต่อชิ้น (บาท)
  qty: number;       // จำนวน >= 1
  image?: string;
  sku?: string;
}