import { Empresa } from './empresa';

export class Mensaje {
  _id: string;
  para: number;
  desde: string;
  texto: string;
  fecha: Date;
  empresa: Empresa;

  Message(_id?: string, para?: number, desde?: string, texto?: string, fecha?: Date) {
    this._id = _id;
    this.para = para;
    this.desde = desde;
    this.texto = texto;
    this.fecha = fecha;
    this.empresa = new Empresa();
  }
}
