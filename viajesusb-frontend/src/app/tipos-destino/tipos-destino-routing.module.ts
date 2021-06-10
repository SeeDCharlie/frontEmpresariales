import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTipoDestinoComponent } from './pages/crear-tipo-destino/crear-tipo-destino.component';
import { DetalleTipoDestinoComponent } from './pages/detalle-tipo-destino/detalle-tipo-destino.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListadoComponent
  },
  {
    path: 'crear',
    component: CrearTipoDestinoComponent
  },
  {
    path: 'editar/:id',
    component: CrearTipoDestinoComponent
  },
  {
    path: 'ver/:id',
    component: DetalleTipoDestinoComponent
  },
  {
    path: ':id',
    component: DetalleTipoDestinoComponent
  },
  {
    path: '**',
    redirectTo: 'listado'
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposDestinoRoutingModule { }
