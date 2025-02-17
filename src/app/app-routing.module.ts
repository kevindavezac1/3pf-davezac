import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './modules/dashboard/components/nav-menu/nav-menu.component';



const routes: Routes = [
  { path: 'inicio', loadChildren: () => import('./modules/dashboard/pages/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'alumnos', loadChildren: () => import('./modules/dashboard/pages/alumnos/alumnos.module').then(m => m.AlumnosModule) },
  { path: 'cursos', loadChildren: () => import('./modules/dashboard/pages/cursos/cursos.module').then(m => m.CursosModule) },
  { path: 'usuarios', loadChildren: () => import('./modules/dashboard/pages/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' } // Redirige por defecto a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
