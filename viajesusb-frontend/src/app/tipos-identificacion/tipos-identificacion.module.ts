import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposIdentificacionRoutingModule } from './tipos-identificacion-routing.module';
import { ListadoTipoIdentificacionComponent } from './pages/listado-tipo-identificacion/listado-tipo-identificacion.component';
import { GuardarTipoIdenficacionComponent } from './pages/guardar-tipo-idenficacion/guardar-tipo-idenficacion.component';
import { DetalleTipoIdentificacionComponent } from './pages/detalle-tipo-identificacion/detalle-tipo-identificacion.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoTipoIdentificacionComponent,
    GuardarTipoIdenficacionComponent,
    DetalleTipoIdentificacionComponent
  ],
  imports: [
    CommonModule,
    TiposIdentificacionRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class TiposIdentificacionModule { }
