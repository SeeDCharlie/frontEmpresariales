import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TipoDestino } from 'src/app/models/tipo-destino';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { TipoDestinoService } from 'src/app/services/tipo-destino.service';

@Component({
  selector: 'app-crear-tipo-destino',
  templateUrl: './crear-tipo-destino.component.html',
  styleUrls: ['./crear-tipo-destino.component.css']
})
export class CrearTipoDestinoComponent implements OnInit {

  newTipoDestino: TipoDestino = new TipoDestino();

  constructor(private tipoDestinoService: TipoDestinoService,
    private router: Router,
    private authService: AutenticacionService,
    private activatedRoute: ActivatedRoute,
    private snak: MatSnackBar) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap(({ id }) =>

        this.tipoDestinoService.consultarTipoDestinoPorCodigo(id)
      )
    ).subscribe(
      resp => { this.newTipoDestino = resp }
    )


  }

  guardarTipoDestino() {

    if (this.newTipoDestino.idTide) {
      this.newTipoDestino.fechaModificacion = new Date();
      this.newTipoDestino.usuModificador = this.authService.usuarioAuth?.login || '';
      this.tipoDestinoService.actualizarTipoDestino(this.newTipoDestino).subscribe(
        resp=>{
          this.snak.open("Tipo Destino Actualizado", 'X', {duration:2000}).afterDismissed().subscribe(
            res=>{
              this.router.navigate(['/tipo-destino']);
            }
          );
        },
        error=>{
          alert("No se pudo atualizar el tipo destino, error : "+error.error);
        }
      );

    } else {
      this.newTipoDestino.fechaCreacion = new Date();
      this.newTipoDestino.usuCreador = this.authService.usuarioAuth?.login || ""

      this.tipoDestinoService.guardarTipoDestino(this.newTipoDestino).subscribe(
        resp => {
          this.snak.open("Tipo Destino Guardado", 'X', {duration:2000}).afterDismissed().subscribe(
            res=>{
              this.router.navigate(['/tipo-destino']);
            }
          );
        },
        err => {
          alert("Error : " + err.error);
        }

      );
    }

  }

  cancelar() {
    this.router.navigate(['/tipo-destino']);
  }

}
