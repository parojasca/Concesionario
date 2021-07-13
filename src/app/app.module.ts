import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListaComponent } from './producto/components/producto-lista/producto-lista.component';
import { ProductoCrearComponent } from './producto/components/producto-crear/producto-crear.component';
import { FormsModule } from '@angular/forms';
import { ProductoEditarComponent } from './producto/components/producto-editar/producto-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListaComponent,
    ProductoCrearComponent,
    ProductoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
