import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'destino',
    loadChildren: () => import('./destinos/destinos.module').then(m => m.DestinosModule)
  },
  {
    path: 'tipo-destino',
    loadChildren: () => import('./tipos-destino/tipos-destino.module').then(m => m.TiposDestinoModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path: 'tipos-identificacion',
    loadChildren: () => import('./tipos-identificacion/tipos-identificacion.module').then(m => m.TiposIdentificacionModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
