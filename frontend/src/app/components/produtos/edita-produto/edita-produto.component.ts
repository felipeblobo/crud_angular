import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.css'],
})
export class EditaProdutoComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    this.productService.readOne(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    const id: number = this.route.snapshot.params.id;
    this.productService.update(this.product, id).subscribe(() => {
      this.productService.showMessage('Produto editado!');
      this.router.navigate(['/produtos']);
    });
  }
  
  cancel(): void {
    this.router.navigate(['/produtos']);
  }

}
