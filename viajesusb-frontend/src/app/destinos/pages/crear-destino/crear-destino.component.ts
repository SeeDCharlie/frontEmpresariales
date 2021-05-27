import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Destino } from 'src/app/models/destino';
import { TipoDestino } from 'src/app/models/tipo-destino';
import { DestinoService } from 'src/app/services/destino.service';
import { TipoDestinoService } from 'src/app/services/tipo-destino.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-crear-destino',
  templateUrl: './crear-destino.component.html',
  styleUrls: ['./crear-destino.component.css']
})
export class CrearDestinoComponent implements OnInit {

  tiposDestino: TipoDestino [] = []
  destino: Destino = new Destino()

  constructor( private tipoDestinoService: TipoDestinoService,
               private destinoService: DestinoService,
               private snak: MatSnackBar,
               private router: Router,
               private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarTiposDestinos()
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.destinoService.consultarDestinoPorId(id) )
    ).subscribe(
      resp => this.destino = resp
    )
    
  }

  cargarTiposDestinos(){
    this.tipoDestinoService.consultarTipoDestino().subscribe( 
      resp => ( this.tiposDestino = resp )
      
     )
  }

  guardar(){

    if(this.destino.idDest){
      this.destino.estado = 'A'
      this.destino.fechaModificacion = new Date()
      this.destino.usuModificador= "seed"
      this.destinoService.actualizarDestino(this.destino).subscribe(
        resp => {
          this.mostrarMensaje("se actualizo el destino satisfactoriamente")
          this.router.navigate(['/destino/listado'])
        }
      )
    }else{
      this.destino.estado = 'A'
      this.destino.fechaCreacion = new Date()
      this.destino.fechaModificacion = new Date()
      this.destino.usuCreador= "seed"
    
      this.destinoService.guardarDestino(this.destino).subscribe(
      resp => {
        this.mostrarMensaje("se guardo el destino satisfactoriamente")
        this.router.navigate(['/destino/listado'])
      }
    )

    }

    

  }

  mostrarMensaje(mensaje: string):void{
    this.snak.open(mensaje, 'x', {duration:3000})
  }

}
