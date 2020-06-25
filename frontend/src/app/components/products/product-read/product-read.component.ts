import { ProductsService } from './../products.service';
import { ProductCreateComponent } from './../product-create/product-create.component';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

 
  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.read().subscribe(products=>{
      this.products = products
      console.log(this.products);
    })
  }

}
