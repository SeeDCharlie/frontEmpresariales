import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposDestinoRoutingModule } from './tipos-destino-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleTipoDestinoComponent } from './pages/detalle-tipo-destino/detalle-tipo-destino.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoComponent,
    DetalleTipoDestinoComponent
  ],
  imports: [
    CommonModule,
    TiposDestinoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class TiposDestinoModule { }
