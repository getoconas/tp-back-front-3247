import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  URL: string = "http://localhost:3000/api/empresas";

  constructor(private _http: HttpClient) { }

  public addEmpresa(empresa: Empresa):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    var body = JSON.stringify(empresa);

    return this._http.post(this.URL, body, httpOptions);
  }

  public getEmpresas():Observable<any> {
    return this._http.get(this.URL);
  }

}
