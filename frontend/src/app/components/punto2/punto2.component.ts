import { Component, OnInit } from '@angular/core';
import { Asistente } from './../../models/asistente';
import { AsistenteService } from 'src/app/services/api/asistente.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistente: Asistente;
  asistentes: Array<Asistente>;
  btnModificar: boolean = false;

  constructor(private asistenteService: AsistenteService) { 
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();
    this.refrescarAsistente();
  }

  /* Guarda los datos en un array */
  public guardarDatos() {
    if (!this.asistente.solicitaConstancia) {
      this.asistente.solicitaConstancia = false;
      this.solicitarConstancia();
    } else {
      this.solicitarConstancia();
    }
    this.asistente = new Asistente();
  }

  public solicitarConstancia() {
    this.asistenteService.addAsistente(this.asistente).subscribe(
      (result) => {
        this.refrescarAsistente();
        alert("Asistente Guardado");
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public refrescarAsistente() {
    //this.asistentes = new Array<Asistente>();
    this.asistenteService.getAsistentes().subscribe(
      (result) => {
        this.asistentes = new Array<Asistente>();
        //this.asistente = result;
        //var asis: Asistente = new Asistente();
        result.forEach(element => {
          var asis: Asistente = new Asistente();
          Object.assign(asis, element);
          this.asistentes.push(asis);
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public eliminarAsistente(asistente) {
    this.asistenteService.deleteAsistente(asistente._id).subscribe(
      result => {
        this.refrescarAsistente();
      },
      error => {
        console.log(error);
      }
    )
  }

  public seleccionarAsistente(asistente) {
    this.asistente = Object.assign({}, asistente);
    this.btnModificar = true;
  }

  public modificarDatos() {
    console.log("Modificar Datos");
    console.log(this.asistente._id);
    this.asistenteService.updateAsistente(this.asistente).subscribe(
      (result) => {
        console.log(result);
        this.refrescarAsistente();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
  }

}
