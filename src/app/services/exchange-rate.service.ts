import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeResponse } from '../models/ExchangeResponse';
@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  basePath: string = environment.basePath + "/prueba";
  constructor(private http: HttpClient) { }

  postExchange(monto: number, monedaOrigen: string, monedaDestino: string): Observable<ExchangeResponse> {
    const body = {
      monto,
      monedaOrigen,
      monedaDestino
    };
    return this.http.post<ExchangeResponse>(this.basePath, body);
  }

}
