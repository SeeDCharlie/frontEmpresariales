import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleTipoIdentificacionComponent } from './pages/detalle-tipo-identificacion/detalle-tipo-identificacion.component';
import { GuardarTipoIdenficacionComponent } from './pages/guardar-tipo-idenficacion/guardar-tipo-idenficacion.component';
import { ListadoTipoIdentificacionComponent } from './pages/listado-tipo-identificacion/listado-tipo-identificacion.component';

const routes: Routes = [
  {
    path:'listado',
    component: ListadoTipoIdentificacionComponent
  },
  {
    path:'crear',
    component: GuardarTipoIdenficacionComponent
  },
  {
    path:'editar/:id',
    component: GuardarTipoIdenficacionComponent
  },
  {
    path:'consultar/:id',
    component: DetalleTipoIdentificacionComponent
  },

  {
    path:"**",
    redirectTo: 'listado'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposIdentificacionRoutingModule { }
