import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asistente } from 'src/app/models/asistente';
 
@Injectable({
  providedIn: 'root'
})
export class AsistenteService {
  URL: string = "http://localhost:3000/api/asistentes";

  constructor(private _http: HttpClient) { }

  public getAsistentes():Observable<any> {
    return this._http.get(this.URL);
  }

  public addAsistente(asistente: Asistente):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(asistente);

    return this._http.post(this.URL, body, httpOptions);
  }

  public updateAsistente(asistente: Asistente) {
    /*const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(asistente);*/

    console.log("asistente.service");
    return this._http.put(this.URL + "/" + asistente._id, asistente);
  }

  public deleteAsistente(id: any) {
    return this._http.delete(this.URL + "/" + id );   
  }
}
