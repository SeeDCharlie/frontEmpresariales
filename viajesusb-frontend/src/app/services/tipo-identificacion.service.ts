import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoIdentificacion } from '../models/tipo-identificacion';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  consultarTipoIdentificacion(): Observable<TipoIdentificacion[]>{
    return this.http.get<TipoIdentificacion[]>(this.baseUrl+'/api/tipoIdentificacion/getTiposIdentificacion')
  }

  consultarTipoIdentificacionPorId(id: number):Observable<TipoIdentificacion>{
    return this.http.get<TipoIdentificacion>(this.baseUrl+'/api/tipoIdentificacion/getTiposIdentificacionPorId/?id='+id)
  }

  guardarTipoIdentificacion(TipoIdentificacion: TipoIdentificacion): Observable<TipoIdentificacion>{
    return this.http.post<TipoIdentificacion>(this.baseUrl+'/api/tipoIdentificacion/guardarTipoIdentificacion', TipoIdentificacion)
  }

  actualizarTipoIdentificacion(TipoIdentificacion: TipoIdentificacion): Observable<TipoIdentificacion>{
    return this.http.put<TipoIdentificacion>(this.baseUrl+'/api/tipoIdentificacion/actualizarTipoIdentificacion', TipoIdentificacion)
  }
  
  eliminarTipoIdentificacion(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl+'/api/tipoIdentificacion/eliminarTipoIdentificacionPorId?idTipoIdent='+id)
  }

}
