import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Cliente } from 'src/app/models/cliente';
import { TipoIdentificacion } from 'src/app/models/tipo-identificacion';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';

@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent implements OnInit {

  newCliente: Cliente = new Cliente();
  tiposIdentificacion: TipoIdentificacion[] = [];

  constructor(private clienteService: ClienteService,
    private tiposIdentifiService: TipoIdentificacionService,
    private authServices: AutenticacionService,
    private snak: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getTiposIdentificacion();

    this.activatedRoute.params.pipe(
      switchMap(({ id }) =>

        this.clienteService.consultarClientePorId(id)
      )
    ).subscribe(
      resp => { this.newCliente = resp }
    )
  }

  getTiposIdentificacion() {
    this.tiposIdentifiService.consultarTipoIdentificacion().subscribe(
      resp => {
        this.tiposIdentificacion = resp;
      },
      error => {
        alert("error : " + error.error);
      }
    );
  }

  guardar() {
    if (this.newCliente.idClie) {
      this.newCliente.fechaModificacion = new Date();
      this.newCliente.usuModificador = this.authServices.usuarioAuth?.login || "seed"
      this.clienteService.actualizarCliente(this.newCliente).subscribe(
        resp => {

          this.snak.open("Cliente Actualizado", 'X', {duration:2000});
          this.router.navigate(['/clientes']);
        },
        error => {
          alert("error : " + error.error);
        }
      );
    }
    else {
      this.newCliente.fechaCreacion = new Date();
      this.newCliente.usuCreador = this.authServices.usuarioAuth?.login || "seed"
      this.clienteService.guardarCliente(this.newCliente).subscribe(
        resp => {
          this.snak.open("Cliente Creado", 'X', {duration:2000});
          this.router.navigate(['/clientes']);
        },
        error => {
          alert("Error : " + error.error);
        }
      );
    }
  }

}
