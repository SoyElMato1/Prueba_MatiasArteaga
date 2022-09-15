import { Component, EventEmitter, Output } from '@angular/core';
import { Alumno } from './../../modelo/alumno'

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent  {
  @Output() public enviardato= new EventEmitter<Alumno>();
  public nuevoAlumno:Alumno={
    rutUnico:0,
    nombre:'',
    apellido:'',
    edad:0,
    seccion:''
  }
  public guardarAlumno():void {
    const copia: Alumno ={
      ...this.nuevoAlumno
    }
    this.enviardato.emit(copia);
    this.nuevoAlumno = {
      rutUnico: 0,
      nombre: '',
      apellido: '',
      edad: 0,
      seccion: ''
    }
  }
  public cambiarRut(evento:Event):void{
    const el = evento.target as HTMLInputElement;
    this.nuevoAlumno.rutUnico = Number.parseInt(el.value);
  }
  public cambiarNombre(evento:Event):void{
    const el = evento.target as HTMLInputElement;
    this.nuevoAlumno.nombre = el.value;
  }
  public cambiarApellido(evento:Event):void{
    const el = evento.target as HTMLInputElement;
    this.nuevoAlumno.apellido = el.value;
  }
  public cambiarEdad(evento:Event):void{
    const el = evento.target as HTMLInputElement;
    this.nuevoAlumno.edad = Number.parseInt(el.value);
  }
  public cambiarSeccion(evento:Event):void{
    const el = evento.target as HTMLInputElement;
    this.nuevoAlumno.seccion = el.value;
  }
}
