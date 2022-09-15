import { Component, EventEmitter, Output } from '@angular/core';
import { Seccion } from './../../modelo/seccion'

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent  {
  @Output() public guardar = new EventEmitter<Seccion>();
  public nuevaSeccion:Seccion={
    idNumerica:0,
    nombreSeccion:''
  }
  public cambiarID(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevaSeccion.idNumerica = Number.parseInt(elemento.value);
  }

  public cambiarNSeccion(evento: Event): void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevaSeccion.nombreSeccion = elemento.value;
  }

  public guardarSeccion(): void{
    const copia: Seccion = {
      ...this.nuevaSeccion
    }
    this.guardar.emit(copia);
    this.nuevaSeccion={
      idNumerica:0,
      nombreSeccion:''
    }
  }
}
