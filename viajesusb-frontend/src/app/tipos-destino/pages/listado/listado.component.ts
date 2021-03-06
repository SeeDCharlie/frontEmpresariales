import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmarComponent } from 'src/app/destinos/components/confirmar/confirmar.component';
import { TipoDestino } from 'src/app/models/tipo-destino';
import { TipoDestinoService } from 'src/app/services/tipo-destino.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  tiposDestino!:  MatTableDataSource<TipoDestino>;

  displayedColumns: string[] = ['idTide', 'codigo', 'nombre', 'descripcion', 'estado', 'editar', 'eliminar'];

  constructor(private tipoDestinoService: TipoDestinoService, 
              private dialog:MatDialog,
              private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.getListTiposDestino();
  }

  getListTiposDestino() {
    this.tipoDestinoService.consultarTipoDestino().subscribe(
      resp => (this.tiposDestino = new MatTableDataSource(resp))
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tiposDestino.filter = filterValue.trim().toLowerCase();
  }


  eliminar(tipoDest: TipoDestino){

    const dialog = this.dialog.open(
      ConfirmarComponent, {width:'250px', data:{titulo:"Confirmacion", mensaje:"Seguro quiere eliminar el tipo destino: "+tipoDest.codigo}}
    )

    dialog.afterClosed().subscribe(
      resp => {
        if(resp){
          this.tipoDestinoService.eliminar(tipoDest.idTide).subscribe(
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
