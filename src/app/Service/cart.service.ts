import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type CartItem = {
  id: string;
  name: string;
  price: number;   // ราคาต่อชิ้น
  qty: number;
  image?: string;
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
private _open$ = new BehaviorSubject<boolean>(false);
  open$ = this._open$.asObservable();

  private _items$ = new BehaviorSubject<CartItem[]>([
    { id: '1', name: 'AromaLeaf', price: 659, qty: 1, image: 'assets/prod-1.jpg' },
  ]);
  items$ = this._items$.asObservable();

  open()  { this._open$.next(true); }
  close() { this._open$.next(false); }
  toggle(){ this._open$.next(!this._open$.value); }

  inc(id: string) {
    this._items$.next(this._items$.value.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
  }
  dec(id: string) {
    this._items$.next(this._items$.value.map(i =>
      i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i));
  }
  remove(id: string) {
    this._items$.next(this._items$.value.filter(i => i.id !== id));
  }

  get subtotal() {
    return this._items$.value.reduce((s, i) => s + i.price * i.qty, 0);
  }
}
