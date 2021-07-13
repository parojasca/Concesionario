import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoCrearComponent } from './producto/components/producto-crear/producto-crear.component';
import { ProductoEditarComponent } from './producto/components/producto-editar/producto-editar.component';
import { ProductoListaComponent } from './producto/components/producto-lista/producto-lista.component';

const routes: Routes = [
  {path: 'productos', component: ProductoListaComponent},
  {path: 'crear-producto', component: ProductoCrearComponent},
  {path: '', redirectTo: 'productos', pathMatch: 'full'},
  {path: 'editar-producto/:id', component: ProductoEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
