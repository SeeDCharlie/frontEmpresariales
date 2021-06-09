import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario} from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuarioAuth: Usuario = new Usuario();

  constructor(private autenticacionService: AutenticacionService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    
    if ( this.usuarioAuth.login == undefined || this.usuarioAuth.password == undefined ){
      alert("Campos Vacios");
    }else{
      this.autenticacionService.login(this.usuarioAuth).subscribe(
        resp => {
          this.autenticacionService.usuarioAuth = resp
          alert("Vienvenido " + this.autenticacionService.usuarioAuth.nombre);
          this.router.navigate(['/destino']);
        },
        err =>{
          alert("error : " + err.error)
        }
      );
    }
  }



}
