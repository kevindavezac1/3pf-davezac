import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavMenuComponent } from './modules/dashboard/components/nav-menu/nav-menu.component';
import { LoginComponent } from './modules/dashboard/pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  
  {path: 'login',component:LoginComponent},
  { path: 'inicio', loadChildren: () => import('./modules/dashboard/pages/inicio/inicio.module').then(m => m.InicioModule),canActivate:[AuthGuard] },
  { path: 'alumnos', loadChildren: () => import('./modules/dashboard/pages/alumnos/alumnos.module').then(m => m.AlumnosModule) ,canActivate:[AuthGuard]},
  { path: 'cursos', loadChildren: () => import('./modules/dashboard/pages/cursos/cursos.module').then(m => m.CursosModule) ,canActivate:[AuthGuard]},
  { path: 'usuarios', loadChildren: () => import('./modules/dashboard/pages/usuarios/usuarios.module').then(m => m.UsuariosModule) ,canActivate:[AuthGuard]},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
