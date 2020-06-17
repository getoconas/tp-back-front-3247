export class Asistente {
  _id: string
  usuario: string;
  nombreOrganizacion: string;
  solicitaConstancia: boolean;

  Asistente(id?: string, usuario?: string, nombreOrganizacion?: string, solicitaConstancia?:boolean) {
    this._id = id;
    this.usuario = usuario;
    this.nombreOrganizacion = nombreOrganizacion;
    this.solicitaConstancia = solicitaConstancia;
  }
}
