import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Destino } from 'src/app/models/destino';
import { DestinoService } from 'src/app/services/destino.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-listado-destino',
  templateUrl: './listado-destino.component.html',
  styleUrls: ['./listado-destino.component.css']
})
export class ListadoDestinoComponent implements OnInit {

  public destinos:Destino[] = [] 

  constructor(
            private destinoService:DestinoService,
            private dialog:MatDialog,
            private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.consultarDestinos()
  }


  consultarDestinos(){
    this.destinoService.consultarDestinos().subscribe( resposeDestinos =>(this.destinos = resposeDestinos) )
  }

  eliminar(destino:Destino){

    const dialog = this.dialog.open(
      ConfirmarComponent, {width:'250px', data:{titulo:"Confirmacion",mensaje:"Seguro quiere eliminar el destino"}}
    )

    dialog.afterClosed().subscribe(
      resp => {
        if(resp){
          this.destinoService.eliminarDestino(destino.idDest).subscribe(
            resp => {
              this.snack.open("destino eliminado satisfactoriamente", 'X', {duration:3000})
              
            }
          )
        }
      }
    )

    
  }

}
