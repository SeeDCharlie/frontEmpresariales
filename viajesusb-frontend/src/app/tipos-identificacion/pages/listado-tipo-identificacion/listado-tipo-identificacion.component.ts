import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private tipoIdenficacionService: TipoIdentificacionService) { }

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

}
