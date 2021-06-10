import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmarComponent } from 'src/app/destinos/components/confirmar/confirmar.component';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';

@Component({
  selector: 'app-listado-tipo-identificacion',
  templateUrl: './listado-tipo-identificacion.component.html',
  styleUrls: ['./listado-tipo-identificacion.component.css']
})
export class ListadoTipoIdentificacionComponent implements OnInit {

  tiposIdentificacion!:  MatTableDataSource<TipoIdentificacion>;
  displayedColumns: string[] = ['idTiid', 'codigo', 'nombre', 'fechaCreacion', 'estado', 'editar', 'eliminar']

  constructor(private tipoIdenficacionService: TipoIdentificacionService,
              private dialog:MatDialog,
              private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.getTiposIdentificacion();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tiposIdentificacion.filter = filterValue.trim().toLowerCase();
  }

  getTiposIdentificacion(){
    this.tipoIdenficacionService.consultarTipoIdentificacion().subscribe(
      resp =>{
        (this.tiposIdentificacion = new MatTableDataSource(resp))
      },
      err => {
        alert("Mesaje : " + err.error);
      }
    );
  }

  eliminar(tipoIdent: TipoIdentificacion){

    const dialog = this.dialog.open(
      ConfirmarComponent, {width:'250px', data:{titulo:"Confirmacion", mensaje:"Seguro quiere eliminar el tipo de identificacion: "+tipoIdent.codigo}}
    )

    dialog.afterClosed().subscribe(
      resp => {
        if(resp){
          this.tipoIdenficacionService.eliminarTipoIdentificacion(tipoIdent.idTiid).subscribe(
            resp => {
              this.snack.open(resp.mensaje, 'X', {duration:2000}).afterDismissed().subscribe(
                resp=>{
                  window.location.reload();
                }
              );
            },
            err=>{
              console.log("ops : ", err);
              alert("error : " + err);
            }
          )
        }
      }
    )

    
  }

}
