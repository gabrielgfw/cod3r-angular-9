import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  isLoading: boolean = false;

  product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.isLoading = true;

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto cadastrado com sucesso!');
      this.isLoading = false;
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
