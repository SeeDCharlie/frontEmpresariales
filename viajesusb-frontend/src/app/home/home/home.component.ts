import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuarioAuth!: Usuario

  constructor(public autenticacionServce: AutenticacionService) { }

  ngOnInit(): void {
  }

  logout(){
    this.autenticacionServce.usuarioAuth = undefined;
  }

}
