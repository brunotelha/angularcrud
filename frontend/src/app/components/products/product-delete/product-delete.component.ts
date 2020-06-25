import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;


  constructor(private ProductsService: ProductsService, 
    private router:Router, 
    private route:ActivatedRoute) { }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductsService.readById(id).subscribe(product=>{
      this.product = product;
    });
  }



  deleteProduct():void {

    const id = this.route.snapshot.paramMap.get('id')
    this.ProductsService.deleteById(id).subscribe(() =>{
     this.ProductsService.showMessage("Produto deletado com sucesso!");
     this.cancel();
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  
  }

}