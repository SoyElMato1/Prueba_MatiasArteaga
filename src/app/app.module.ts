import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';
import { ListaAlumnoComponent } from './componentes/lista-alumno/lista-alumno.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { HistorialComponent } from './componentes/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioSeccionComponent,
    FormularioAlumnoComponent,
    ListaHistorialComponent,
    ListaAlumnoComponent,
    AlumnoComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
