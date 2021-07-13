import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from "../../../clases/producto";
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

  productos: Producto[] | undefined;

  constructor(private productService: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProductList().subscribe(data => {
      this.productos = data;
    })
  }

  updateProduct(id: number){
    this.router.navigate(['editar-producto',id]);
  }

}
