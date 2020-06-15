export class Mensaje {
  para: number;
  de: string;
  texto: string;
  fecha: Date;

  Message(para?: number, de?: string, texto?: string, fecha?: Date) {
    this.para = para;
    this.de = de;
    this.texto = texto;
    this.fecha = fecha;
  }
}
