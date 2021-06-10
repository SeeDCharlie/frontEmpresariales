import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoDestino } from '../models/tipo-destino';

@Injectable({
  providedIn: 'root'
})
export class TipoDestinoService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  consultarTipoDestino(): Observable<TipoDestino[]>{
    return this.http.get<TipoDestino[]>(this.baseUrl+'/api/tipoDestino/getTiposDestino')
  }

  consultarTipoDestinoPorCodigo(cod:string):Observable<TipoDestino>{
    return this.http.get<TipoDestino>(this.baseUrl+'/api/tipoDestino/getTiposDestinoPorCodigo?codigo='+cod);
  }

  guardarTipoDestino(tipoDest: TipoDestino):Observable<TipoDestino>{
    return this.http.post<TipoDestino>(this.baseUrl+'/api/tipoDestino/guardarTipoDestino', tipoDest);
  }

  actualizarTipoDestino(tipoDest: TipoDestino):Observable<TipoDestino>{
    return this.http.put<TipoDestino>(this.baseUrl+'/api/tipoDestino/actualizarTipoDestino', tipoDest);
  }

  eliminar(id: number): Observable<any>{
    return this.http.delete<string>(this.baseUrl + '/api/tipoDestino/eliminarTipoDestino?idTipoDestino='+id);
  }





}
