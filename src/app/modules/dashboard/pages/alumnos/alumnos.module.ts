import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';

import {  MatTableModule } from '@angular/material/table';
import {  MatButtonModule } from '@angular/material/button';
import {  MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports:[]
})
export class AlumnosModule { }
