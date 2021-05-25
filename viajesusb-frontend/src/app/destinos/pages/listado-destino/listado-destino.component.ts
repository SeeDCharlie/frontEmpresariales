import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';

@Component({
  selector: 'app-listado-destino',
  templateUrl: './listado-destino.component.html',
  styleUrls: ['./listado-destino.component.css']
})
export class ListadoDestinoComponent implements OnInit {

  public destinos:Destino[] = [] 

  constructor(private destinoService:DestinoService) { }

  ngOnInit(): void {
    this.consultarDestinos()
  }


  consultarDestinos(){
    this.destinoService.consultarDestinos().subscribe( resposeDestinos =>(this.destinos = resposeDestinos) )
  }

}
