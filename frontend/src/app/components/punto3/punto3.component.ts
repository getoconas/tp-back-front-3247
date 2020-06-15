import { Component, OnInit } from '@angular/core';
import { Pasaje } from './../../models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasaje: Pasaje;
  pasajes: Array<Pasaje>;
  precioDescuento: number = 0;
  precioFinal: number = 0;
  mostrarDescuento: boolean = false;

  constructor(private ventaService: VentasService) {
    this.pasaje = new Pasaje();
    this.pasajes = new Array<Pasaje>();
    this.listarPasajes();
  }

  public venderPasaje() {
    this.pasaje.fechaCompra = new Date();
    this.pasaje.precioPasaje = this.precioFinal;
    this.ventaService.venderPasaje(this.pasaje);
    this.pasaje = new Pasaje();
    this.limpiarPrecios();
  }

  public limpiarPantalla() {
    this.pasaje = new Pasaje();
    this.limpiarPrecios();
  }

  public listarPasajes() {
    this.pasajes = this.ventaService.listarPasajes();
  }

  public calcularDescuento() {
    if (this.pasaje.categoriaPasajero == 'm') {
      this.precioDescuento = (this.pasaje.precioPasaje * 25) / 100;
      this.precioFinal = this.pasaje.precioPasaje - this.precioDescuento;
      this.mostrarDescuento = true;
    }
    if (this.pasaje.categoriaPasajero == 'j') {
      this.precioDescuento = (this.pasaje.precioPasaje * 50) / 100;
      this.precioFinal = this.pasaje.precioPasaje - this.precioDescuento;
      this.mostrarDescuento = true;
    }
    if (this.pasaje.categoriaPasajero == 'a') {
      this.precioDescuento = 0;
      this.precioFinal = this.pasaje.precioPasaje;
      this.mostrarDescuento = false;
    }
  }

  public limpiarPrecios() {
    this.precioDescuento = 0;
    this.precioFinal = 0;
    this.mostrarDescuento = false;
  }

  ngOnInit(): void {
  }

}
