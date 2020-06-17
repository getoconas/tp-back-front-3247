import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  URL: string = "http://localhost:3000/api/mensajes";

  constructor(private _http: HttpClient) { }

  public addMensaje(mensaje: Mensaje):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(mensaje);

    return this._http.post(this.URL, body, httpOptions);
  }

  public getMensajes():Observable<any> {
    return this._http.get(this.URL);
  }
}
