import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoModule } from './destino/destino.module';
import { TipoDestinoComponent } from './tipos-destino/tipo-destino/tipo-destino.component';
import { TiposDestinosModule } from './tipos-destino/tipos-destinos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TiposDestinosModule,
    DestinoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
