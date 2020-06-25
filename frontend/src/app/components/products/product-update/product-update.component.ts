import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {


  product:Product;


  constructor(private ProductsService: ProductsService, 
    private router:Router, 
    private route:ActivatedRoute) { }



  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductsService.readById(id).subscribe(product=>{
      this.product = product;
    });
  }

  updateProduct(): void{

    this.ProductsService.update(this.product).subscribe(() =>{
      this.ProductsService.showMessage("Produto atualizado com sucesso!");
      this.cancel();
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  
  }

}
