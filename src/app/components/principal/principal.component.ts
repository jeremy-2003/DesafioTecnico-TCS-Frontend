import { Component } from '@angular/core';
import { ExchangeResponse } from 'src/app/models/ExchangeResponse';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  monto: number;
  monedaActual: string;
  monedaDeseada: string;

  montoConTipoDeCambio!: number;
  monedaOrigen!: string;
  monedaDestino!: string;
  tipoDeCambio!: number;

  constructor(private exchangeRateService: ExchangeRateService) {
    this.monto = 0;
    this.monedaActual = '';
    this.monedaDeseada = '';
  }

  convertir() {
    this.exchangeRateService.postExchange(this.monto, this.monedaActual, this.monedaDeseada)
      .subscribe((response: ExchangeResponse) => {
        this.montoConTipoDeCambio = response.montoConTipoDeCambio;
        this.monedaOrigen = response.monedaOrigen;
        this.monedaDestino = response.monedaDestino;
        this.tipoDeCambio = response.tipoDeCambio;
      }, error => {
        console.error('Error al realizar la conversión:', error);
      });
  }
}
