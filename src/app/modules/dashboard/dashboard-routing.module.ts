import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';

/**
 * aqui estamos posicionados en la ruta, o partimos de /dashboard
 */

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'alumnos', component: AlumnosComponent },
      { path: 'cursos', component: CursosComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' } // Redirige por defecto a inicio
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
