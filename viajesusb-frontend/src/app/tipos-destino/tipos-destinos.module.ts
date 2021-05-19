import { NgModule } from "@angular/core";
import { TipoDestinoComponent } from "./tipo-destino/tipo-destino.component";
import { ListTipoDestinoComponent } from './list-tipo-destino/list-tipo-destino.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        TipoDestinoComponent,
        ListTipoDestinoComponent
    ],
    exports:[
        TipoDestinoComponent,
        ListTipoDestinoComponent
    ],
    imports:[
        CommonModule
    ]

})

export class TiposDestinosModule{

}