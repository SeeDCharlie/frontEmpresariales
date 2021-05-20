import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarDestinoComponent } from './pages/consultar-destino/consultar-destino.component';
import { CrearDestinoComponent } from './pages/crear-destino/crear-destino.component';
import { DetalleDestinoComponent } from './pages/detalle-destino/detalle-destino.component';
import { ListadoDestinoComponent } from './pages/listado-destino/listado-destino.component';

const routes: Routes = [
  {
    path:'',
    component: ListadoDestinoComponent,
    children:[
      {
        path:'listado',
        component: ListadoDestinoComponent
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
        redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }
