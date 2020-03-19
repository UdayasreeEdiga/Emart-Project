import { Component, OnInit } from '@angular/core';

import { Product } from '../entities/product.entity';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-mensub',
  templateUrl: './mensub.component.html',
  styleUrls: ['./mensub.component.css']
})
export class MensubComponent implements OnInit {
  public products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }

}






