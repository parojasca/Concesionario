import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {
  id: number = 0;
  producto: Producto = new Producto();
  constructor(private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProductById(this.id).subscribe(data =>{
      this.producto = data;
    }, error => console.log(error));
    
  }

  updateProduct(){
    this.productoService.updateProduct(this.id, this.producto)
      .subscribe(data =>{
        this.producto = new Producto();
        this.goToProductList();
      },error => console.log(error))
  }
  onSubmit(){

  }

  goToProductList(){
    this.router.navigate(['/productos']);
  }
}
