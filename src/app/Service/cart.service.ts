import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem } from '../Model/CartItem';

const LS_KEY = 'cart_items_v1';
@Injectable({
  providedIn: 'root'
})
export class CartService {
 private _open$ = new BehaviorSubject<boolean>(false);
  open$ = this._open$.asObservable();
  open()  { this._open$.next(true); }
  close() { this._open$.next(false); }
  toggle(){ this._open$.next(!this._open$.value); }

  // ==== Cart items ====
   private _items$ = new BehaviorSubject<CartItem[]>(this.readFromLS());
  items$ = this._items$.asObservable();

  // รวมจำนวนชิ้น & รวมเงินแบบ observable
  totalQty$ = this.items$.pipe(map(items => items.reduce((n, i) => n + i.qty, 0)));
  subtotal$ = this.items$.pipe(map(items => items.reduce((s, i) => s + i.price * i.qty, 0)));

  // ✅ เพิ่มสินค้าใหม่
  add(item: CartItem) {
    const items = [...this._items$.value];
    const idx = items.findIndex(i => i.id === item.id);

    const incomingQty = Number(item.qty) || 1;

    if (idx >= 0) {
      const current = Number(items[idx].qty) || 0;
      items[idx] = { ...items[idx], qty: current + incomingQty };
    } else {
      items.unshift({ ...item, qty: incomingQty });
    }

    this._items$.next(items);
    this.persist();
  }
 get subtotal() {
    return this._items$.value.reduce((s, i) => s + i.price * i.qty, 0);
 }
  // ✅ ปุ่มเพิ่ม / ลด / ลบ
  inc(id: string) { this.updateQty(id, +1); }
  dec(id: string) { this.updateQty(id, -1, true); }
  remove(id: string) {
    this._items$.next(this._items$.value.filter(i => i.id !== id));
    this.persist();
  }
  clear() {
    this._items$.next([]);
    this.persist();
  }

  // ✅ อัปเดตจำนวนอย่างปลอดภัย
  private updateQty(id: string, delta: number, floor1 = false) {
    const next = this._items$.value.map(i => {
      if (i.id !== id) return i;
      const q = Number(i.qty) || 0;
      const newQ = floor1 ? Math.max(1, q + delta) : q + delta;
      return { ...i, qty: newQ };
    });
    this._items$.next(next);
    this.persist();
  }

  // ✅ สำหรับ input number โดยตรง
  setQty(id: string, qty: number) {
    const q = Math.max(1, Number(qty) || 1);
    const next = this._items$.value.map(i => i.id === id ? { ...i, qty: q } : i);
    this._items$.next(next);
    this.persist();
  }

  private persist() {
    localStorage.setItem(LS_KEY, JSON.stringify(this._items$.value));
  }

  private readFromLS(): CartItem[] {
    try {
      const arr = JSON.parse(localStorage.getItem(LS_KEY) || '[]') as CartItem[];
      return (arr || []).map(i => ({
        ...i,
        qty: Number(i.qty) || 1,
        price: Number(i.price) || 0
      }));
    } catch {
      return [];
    }
  }
}