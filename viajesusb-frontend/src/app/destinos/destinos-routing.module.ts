import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from '../tipos-destino/pages/listado/listado.component';
import { ConsultarDestinoComponent } from './pages/consultar-destino/consultar-destino.component';
import { CrearDestinoComponent } from './pages/crear-destino/crear-destino.component';
import { DetalleDestinoComponent } from './pages/detalle-destino/detalle-destino.component';

const routes: Routes = [
  {
    path:'',
    component: ListadoComponent,
    children:[
      {
        path:'listado',
        component: ListadoComponent
      },
      {
        path:'crear',
        component: CrearDestinoComponent
      },
      {
        path:'editar/:id',
        component: CrearDestinoComponent
      },
      {
        path:'consultar',
        component: ConsultarDestinoComponent
      },
      {
        path:':id',
        component: DetalleDestinoComponent
      },
      {
        path:'**',
        component: ListadoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }
