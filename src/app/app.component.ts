import { Component } from '@angular/core';
import { Alumno } from './modelo/alumno'
import { Seccion } from './modelo/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Matias_Arteaga_006D';

  public listarAlumno: Array<Alumno>=[{
    rutUnico:212632120,
    nombre: 'Matias',
    apellido:'Arteaga',
    edad:19,
    seccion:'006D'
  }]

  public escucharAlumno(nuevoA: Alumno): void{
    this.listarAlumno.push(nuevoA);
  }
}
