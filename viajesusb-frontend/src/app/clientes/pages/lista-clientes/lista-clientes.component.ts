import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {


  clientes!:  MatTableDataSource<Cliente>;
  displayedColumns: string[] = ['idClie', 'numeroIdentificacion', 'nombre', 'primerApellido', 'estado', 'editar', 'eliminar']

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientes.filter = filterValue.trim().toLowerCase();
  }

  getClientes(){
    this.clienteService.consultarClientes().subscribe(
      resp => {
        this.clientes = new MatTableDataSource(resp);
      },
      err => {
        alert("Mensaje : " + err.error);
      }
    );
  }

}
