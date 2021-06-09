import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleClienteComponent } from './pages/detalle-cliente/detalle-cliente.component';
import { GuardarClienteComponent } from './pages/guardar-cliente/guardar-cliente.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';

const routes: Routes = [
  {
    path:'listado',
    component: ListaClientesComponent
  },
  {
    path:'crear',
    component: GuardarClienteComponent
  },
  {
    path:'editar/:id',
    component: GuardarClienteComponent
  },
  {
    path:'consultar/:id',
    component: DetalleClienteComponent
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
export class ClientesRoutingModule {


  
 }
