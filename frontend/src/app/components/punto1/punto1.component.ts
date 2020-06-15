import { Component, OnInit } from '@angular/core';
import { Mensaje } from './../../models/mensaje';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})

export class Punto1Component implements OnInit {

  mensaje: Mensaje;
  tamMaxTexto: number = 100;
  tamTexto: number = 0;
  mensajes: Array<Mensaje>;

  paraView: number;
  deView: string;
  textoView: string;

  constructor() { 
    this.mensaje = new Mensaje();
    this.mensajes = new Array<Mensaje>();
  }

  /* Permite actualizar el tamaño */
  public cambiarTamTexto() {
    this.tamTexto = this.mensaje.texto.length;
    console.log(this.tamTexto);
  }

  /* Accion de enviar mensaje */
  public enviarMensaje() {
    this.mensaje.fecha = new Date();
    this.mostrarDato();
    this.mensajes.push(this.mensaje);
    this.mensaje = new Mensaje();
    this.tamTexto = 0;
  }

  public limpiarMensaje() {
    this.mensaje = new Mensaje();
    this.tamTexto = 0;
  }

  public mostrarDato() {
    this.paraView = this.mensaje.para;
    this.deView = this.mensaje.de;
    this.textoView = this.mensaje.texto;
  }

  ngOnInit(): void {
  }

}
