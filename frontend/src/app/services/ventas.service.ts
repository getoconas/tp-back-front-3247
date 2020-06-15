import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  ventas: Array<Pasaje>;

  constructor() { 
    this.ventas = new Array<Pasaje>();
  }

  venderPasaje(venta: Pasaje) {
    this.ventas.push(venta);
  }

  listarPasajes() {
    return this.ventas;
  }
}
