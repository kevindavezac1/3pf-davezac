import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

// Módulos de Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';  // Asegúrate de que MatDialogModule esté aquí
import { MatListModule } from '@angular/material/list';

// Módulo para ngModel
import { FormsModule } from '@angular/forms'; 

// Componentes
import { DashboardComponent } from './dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

import { TitleSizeDirective } from '../../directives/title-size.directive';

import { ReactiveFormsModule } from '@angular/forms';
import { DialogEditAlumnoComponent } from './pages/dialog-edit-alumno/dialog-edit-alumno.component';

import { FullNamePipe } from '../../directives/pipes/full-name.pipe';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DialogEditCursoComponent } from './pages/dialog-edit-curso/dialog-edit-curso.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    AlumnosComponent,
    FullNamePipe,
    TitleSizeDirective,
    DialogEditAlumnoComponent,
    NavMenuComponent,
    InicioComponent,
    CursosComponent,
    UsuariosComponent,
    DialogEditCursoComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,  
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,  
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,  
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule ,
    MatDialogModule,
    MatListModule

  ],
  exports: [DashboardComponent, TitleSizeDirective]  
})

export class DashboardModule { }
