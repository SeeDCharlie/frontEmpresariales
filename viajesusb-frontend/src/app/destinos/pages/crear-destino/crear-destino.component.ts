import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { TipoDestino } from 'src/app/models/tipo-destino';

@Component({
  selector: 'app-crear-destino',
  templateUrl: './crear-destino.component.html',
  styleUrls: ['./crear-destino.component.css']
})
export class CrearDestinoComponent implements OnInit {

  tiposDestino: TipoDestino[] = []
  destino: Destino = new Destino()

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    this.destino.estado = 'A'
    this.destino.fechaCreacion = new Date()
    this.destino.usuCreador= "seed"
    this.destino
  }

}
