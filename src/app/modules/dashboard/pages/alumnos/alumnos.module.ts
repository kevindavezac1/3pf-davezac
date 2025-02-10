import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { MatTable } from '@angular/material/table';
import { MatButton } from '@angular/material/button';


@NgModule({
  declarations: [
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTable,
    MatButton
  ],
  exports:[AlumnosComponent]
})
export class AlumnosModule { }
