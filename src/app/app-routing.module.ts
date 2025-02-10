import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent,
    loadChildren: ()=> import('../app/modules/dashboard/dashboard.module').then(
      (m)=> m .DashboardModule
    )
  },

  //esta lleva a la pagin por defecto, cuando se escribe algo mal
  // {path:'**', component: }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
