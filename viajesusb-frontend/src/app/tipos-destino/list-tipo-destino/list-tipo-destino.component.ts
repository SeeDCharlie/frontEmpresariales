import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tipo-destino',
  templateUrl: './list-tipo-destino.component.html',
  styleUrls: ['./list-tipo-destino.component.css']
})
export class ListTipoDestinoComponent implements OnInit {

  tiposDestinos: string[] = ["playa", "decierto", "nieve", "montaña"]
  tipoDestinoEliminado?: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  borrarDestino() {
    this.tipoDestinoEliminado = this.tiposDestinos.shift()
  }

}
