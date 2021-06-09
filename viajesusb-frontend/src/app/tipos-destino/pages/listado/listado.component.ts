import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private tipoDestinoService: TipoDestinoService) { }

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



}
