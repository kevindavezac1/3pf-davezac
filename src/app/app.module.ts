import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';  
import { MatIconModule } from '@angular/material/icon';  
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatInputModule } from '@angular/material/input';  
import { FormsModule } from '@angular/forms';  
import { ReactiveFormsModule } from '@angular/forms';  

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
import { LoginComponent } from './modules/dashboard/pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store';


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
    ToolbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,  
    MatIconModule,    
    MatFormFieldModule, 
    MatInputModule,     
    FormsModule, 
    ReactiveFormsModule,  
    MatInputModule, 
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer, {})
    
  ],

  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
