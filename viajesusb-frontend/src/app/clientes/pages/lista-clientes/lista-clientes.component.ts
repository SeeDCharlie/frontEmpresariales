import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmarComponent } from 'src/app/destinos/components/confirmar/confirmar.component';
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

  constructor(private clienteService: ClienteService,
              private snak: MatSnackBar,
              private dialog:MatDialog) { }

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
        this.snak.open(err.error, 'x', {duration:3000});
      }
    );
  }

  eliminar(client: Cliente){

    const dialog = this.dialog.open(
      ConfirmarComponent, {width:'250px', data:{titulo:"Confirmacion", mensaje:"Seguro quiere eliminar el cliente: "+client.numeroIdentificacion}}
    )

    dialog.afterClosed().subscribe(
      resp => {
        if(resp){
          this.clienteService.eliminarCliente(client.idClie).subscribe(
            resp => {
              this.snak.open(resp.mensaje, 'X', {duration:2000}).afterDismissed().subscribe(
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
