import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { GuardarClienteComponent } from './pages/guardar-cliente/guardar-cliente.component';
import { DetalleClienteComponent } from './pages/detalle-cliente/detalle-cliente.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaClientesComponent,
    GuardarClienteComponent,
    DetalleClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule

  ]
})
export class ClientesModule { }
