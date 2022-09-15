import { Alumno } from './alumno'

export interface Historial {
  fecha: Date;
  hora: number;
  alumno: Alumno
}
