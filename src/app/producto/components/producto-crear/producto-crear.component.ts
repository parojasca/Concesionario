import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../../../clases/producto';

@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent implements OnInit {

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService,
    private router: Router) { }


  ngOnInit(): void {
  }

  saveProduct(){
    this.productoService.createProduct(this.producto).subscribe(data =>{
      console.log(data)
      this.goToProductList();
    }),
      (error: any) => console.error(error);
  }
  goToProductList(){
    this.router.navigate(['/productos'])
  }
  onSubmit(){
    console.log(this.producto);
    
    this.saveProduct();
    
  }

}
