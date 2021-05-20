import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-destino',
  templateUrl: './listado-destino.component.html',
  styleUrls: ['./listado-destino.component.css']
})
export class ListadoDestinoComponent implements OnInit {

  public destinos:string [] = ["A","B","C","D","E","F","G"] 

  constructor() { }

  ngOnInit(): void {
  }

}
