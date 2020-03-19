import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[];
  constructor() {
    this.products = [
      { id: 'p1', name: 'CASUAL SHIRT', price: 1600, photo: 'assets/images/m1.jpg '},
      { id: 'p2', name: 'KURTHA SET', price: 1200, photo: 'assets/images/m2.jpg' },
      { id: 'p3', name: 'JEANS', price: 1300, photo: 'assets/images/m4.jpg' },
      { id: 'p4', name: 'WINTER JACKET', price: 3200, photo: 'assets/images/men3.png' },

  ];
}


findAll(): Product[] {
  return this.products;
}

find(id: string): Product {
  return this.products[this.getSelectedIndex(id)];
}

public getSelectedIndex(id: string) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
          return i;
      }
  }
  return -1;
}

}


   
  

  

