import { Component, OnInit } from '@angular/core';
import { Asistente } from './../../models/asistente';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistente: Asistente;
  asistentes: Array<Asistente>;

  constructor() { 
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();
  }

  /* Guarda los datos en un array */
  public guardarDatos() {
    if (!this.asistente.solicitaConstancia) {
      this.asistente.solicitaConstancia = false;
      this.asistentes.push(this.asistente);
    } else {
      this.asistentes.push(this.asistente);
    }
    console.log(this.asistentes);
    this.asistente = new Asistente();
  }

  ngOnInit(): void {
  }

}
