import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { CrearDestinoComponent } from './pages/crear-destino/crear-destino.component';
import { ConsultarDestinoComponent } from './pages/consultar-destino/consultar-destino.component';
import { DetalleDestinoComponent } from './pages/detalle-destino/detalle-destino.component';
import { ListadoDestinoComponent } from './pages/listado-destino/listado-destino.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';


@NgModule({
  declarations: [
    CrearDestinoComponent,
    ConsultarDestinoComponent,
    DetalleDestinoComponent,
    ListadoDestinoComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    DestinosRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class DestinosModule { }
