import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';  // Necesario para los diálogos
import { MatIconModule } from '@angular/material/icon';  // Necesario para los iconos
import { MatFormFieldModule } from '@angular/material/form-field';  // Necesario para <mat-form-field>
import { MatInputModule } from '@angular/material/input';  // Necesario para <mat-input>
import { FormsModule } from '@angular/forms';  // Necesario para ngModel
import { ReactiveFormsModule } from '@angular/forms';  // Si usas formularios reactivos

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CursosComponent } from './modules/dashboard/pages/cursos/cursos.component';
import { InicioComponent } from './modules/dashboard/pages/inicio/inicio.component';
import { DialogEditAlumnoComponent } from './modules/dashboard/pages/dialog-edit-alumno/dialog-edit-alumno.component';
import { DialogEditCursoComponent } from './modules/dashboard/pages/dialog-edit-curso/dialog-edit-curso.component';
import { UsuariosComponent } from './modules/dashboard/pages/usuarios/usuarios.component';
import { AlumnosComponent } from './modules/dashboard/pages/alumnos/alumnos.component';
import { TitleSizeDirective } from './directives/title-size.directive';
import { FullNamePipe } from './directives/pipes/full-name.pipe';
import { NavMenuComponent } from './modules/dashboard/components/nav-menu/nav-menu.component';
import { ToolbarComponent } from './modules/dashboard/components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    InicioComponent,
    DialogEditAlumnoComponent,
    DialogEditCursoComponent,
    UsuariosComponent,
    AlumnosComponent,
    FullNamePipe,
    TitleSizeDirective,
    NavMenuComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,  // Importar el módulo para usar diálogos
    MatIconModule,    // Importar el módulo para usar iconos
    MatFormFieldModule,  // Importar el módulo para usar <mat-form-field>
    MatInputModule,     // Importar el módulo para usar <mat-input>
    FormsModule,  // Importar FormsModule para usar ngModel
    ReactiveFormsModule,  // Si usas formularios reactivos
    MatInputModule, // Añade MatListModule
    MatToolbarModule,
    MatListModule
    
  ],

  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
