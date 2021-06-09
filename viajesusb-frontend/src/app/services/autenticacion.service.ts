import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private baseUrl: string = environment.baseUrl
  public usuarioAuth!: Usuario;

  constructor(private http: HttpClient) { }

  login(usr : Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseUrl+'/api/usuario/login', usr);
  }




}
