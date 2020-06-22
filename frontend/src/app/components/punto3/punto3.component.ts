import { Component, OnInit } from '@angular/core';
import { Pasaje } from './../../models/pasaje';
import { Adelanto } from 'src/app/models/adelanto';
import { AdelantoService } from 'src/app/services/api/adelanto.service';
import { VentaService } from 'src/app/services/api/venta.service';
import { element } from 'protractor';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasaje: Pasaje;
  adelanto: Adelanto;
  pasajes: Array<Pasaje>;
  adelantos: Array<Adelanto>;
  precioDescuento: number = 0;
  precioFinal: number = 0;
  mostrarDescuento: boolean = false;

  constructor(private adelantoService: AdelantoService, private ventaService: VentaService) {
    this.pasaje = new Pasaje();
    this.adelanto = new Adelanto();
    this.pasajes = new Array<Pasaje>();
    this.adelantos = new Array<Adelanto>();
    
    this.listarPasajes();
  }

  public venderPasaje() {
    this.pasaje.precioPasaje = this.precioFinal;
    if (this.pasaje.precioPasaje >= this.adelanto.montoAdelanto) {
      this.cargaDatos();
      /*this.ventaService.venderPasaje(this.pasaje);*/
      this.guardarPasaje();

      this.pasaje = new Pasaje();
      this.adelanto = new Adelanto();
      this.adelantos = new Array<Adelanto>();
      this.limpiarPrecios();
    } else {
      alert('El monto debe ser menor o igual a precio');
    }
  }

  public cargaDatos() {
    this.adelanto.fecha = new Date();
    console.log(this.adelanto);
    this.pasaje.adelantos.push(this.adelanto);
    //this.adelantos.push(this.adelanto);
    //this.pasaje.adelantos = this.adelantos;
    this.pasaje.fechaCompra = new Date();
    this.pasaje.precioPasaje = this.precioFinal;
    console.log(this.pasaje);
  }

  public guardarPasaje() {
    console.log("aqui");
    this.ventaService.addVenta(this.pasaje).subscribe(
      (result) => {
        this.listarPasajes();
        console.log("Pasaje vendido");
        alert("Pasaje Vendido");
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public limpiarPantalla() {
    this.pasaje = new Pasaje();
    this.limpiarPrecios();
  }

  /**
   * Lista los pasajes vendidos
   */
  public listarPasajes() {
    this.ventaService.getVentas().subscribe(
      (result) => {
        console.log(result);
        this.pasajes = new Array<Pasaje>();
        result.forEach(element => {
          var pas: Pasaje = new Pasaje();
          Object.assign(pas, element);
          this.pasajes.push(pas);
        })
      },
      (error) => {
        console.log(error);
      }
    )
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
