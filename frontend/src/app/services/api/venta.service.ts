import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pasaje } from 'src/app/models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  URL: string = "http://localhost:3000/api/ventas";
  
  constructor(private _http: HttpClient) { }

  public getVentas():Observable<any> {
    return this._http.get(this.URL);
  }

  public addVenta(pasaje: Pasaje):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(pasaje);

    return this._http.post(this.URL, body, httpOptions);
  }

  public updateVenta(pasaje: Pasaje) {
    return this._http.put(this.URL + "/" + pasaje._id, pasaje);
  }

  public deleteVenta(id: any) {
    return this._http.delete(this.URL + "/" + id);
  }
}
