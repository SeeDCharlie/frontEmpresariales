import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';

@Component({
  selector: 'app-guardar-tipo-idenficacion',
  templateUrl: './guardar-tipo-idenficacion.component.html',
  styleUrls: ['./guardar-tipo-idenficacion.component.css']
})
export class GuardarTipoIdenficacionComponent implements OnInit {

  newTipoIdentificacion: TipoIdentificacion= new TipoIdentificacion();

  constructor(private tipoIdentService: TipoIdentificacionService,
              private authServices: AutenticacionService,
              private snak: MatSnackBar,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) =>

        this.tipoIdentService.consultarTipoIdentificacionPorId(id)
      )
    ).subscribe(
      resp => { this.newTipoIdentificacion = resp }
    )
  }



  guardar(){
    
    if(this.newTipoIdentificacion.idTiid){
      this.newTipoIdentificacion.fechaModificacion = new Date();
      this.newTipoIdentificacion.usuModificador = this.authServices.usuarioAuth?.login || ""
      this.tipoIdentService.actualizarTipoIdentificacion(this.newTipoIdentificacion).subscribe(
        resp=>{
          this.snak.open("Tipo Identificacion Actualizado", 'X', {duration:2000}).afterDismissed().subscribe(
            res=>{
              this.router.navigate(['/tipos-identificacion']);
            }
          );
        },
        error=>{
          alert("error : " + error.error);
        }
      );
    }else{
      this.newTipoIdentificacion.fechaCreacion = new Date();
      this.newTipoIdentificacion.usuCreador = this.authServices.usuarioAuth?.login || ""
      this.tipoIdentService.guardarTipoIdentificacion(this.newTipoIdentificacion).subscribe(
        resp=>{
          this.snak.open("Tipo Identificacion creado", 'X', {duration:2000}).afterDismissed().subscribe(
            res=>{
              this.router.navigate(['/tipos-identificacion']);
            }
          );
        },
        error=>{
          alert("error : " + error.error);
        }
      );

    }
    
  }

}
