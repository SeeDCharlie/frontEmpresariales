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





}
