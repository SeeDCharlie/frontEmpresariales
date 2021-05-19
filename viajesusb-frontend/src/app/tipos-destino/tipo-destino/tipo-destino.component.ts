import { Component } from "@angular/core";

@Component({
    selector: "app-tipo-destino",
    templateUrl: "tipo-destino.component.html",
    styleUrls: ["tipo-destino.component.css"]
})

export class TipoDestinoComponent{
    titulo: string = "Bienvenidos a viajes usb: tipos destino" 
    nombre: string = "playa"
    descripcion:string = "playa, tierra, mar"

    concatenarNombre():string{
        return this.nombre + " " + this.descripcion
    }

    cambiarNombre(){
        this.nombre = "tu mama"
    }

   
}
