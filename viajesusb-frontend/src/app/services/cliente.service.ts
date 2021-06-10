import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  consultarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl+'/api/cliente/getClientes')
  }

  consultarClientePorId(id: number):Observable<Cliente>{
    return this.http.get<Cliente>(this.baseUrl+'/api/cliente/getClientePorId/?idCliente='+id)
  }

  guardarCliente(Cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl+'/api/cliente/guardarCliente', Cliente)
  }

  actualizarCliente(Cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.baseUrl+'/api/cliente/actualizarCliente', Cliente)
  }
  
  eliminarCliente(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl+'/api/cliente/eliminarClientePorId?idCliente='+id)
  }

}
