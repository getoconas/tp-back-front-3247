export class Pasaje {
  dniPasajero: number;
  precioPasaje: number;
  categoriaPasajero: string;
  fechaCompra: Date;

  Pasaje(dniPasajero?: number, precioPasaje?: number, categoriaPasajero?: string, fechaCompra?: Date) {
    this.dniPasajero = dniPasajero;
    this.precioPasaje = precioPasaje;
    this.categoriaPasajero = categoriaPasajero;
    this.fechaCompra = fechaCompra;
  }
}
