import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destino } from '../models/destino';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  consultarDestinos(): Observable<Destino[]>{
    return this.http.get<Destino[]>(this.baseUrl+'/api/destino/getDestinos')
  }

  consultarDestinoPorId(id: number):Observable<Destino>{
    return this.http.get<Destino>(this.baseUrl+'/api/destino/getDestinoPorId/?id='+id)
  }

  guardarDestino(destino: Destino): Observable<Destino>{
    return this.http.post<Destino>(this.baseUrl+'/api/destino/guardarDestino', destino)
  }

  actualizarDestino(destino: Destino): Observable<Destino>{
    return this.http.put<Destino>(this.baseUrl+'/api/destino/actualizarDestino', destino)
  }
  
  eliminarDestino(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl+'/api/destino/eliminarDestino?idDestino='+id)
  }

}
