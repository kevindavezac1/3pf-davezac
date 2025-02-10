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
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [
    AppComponent,
  
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
    DashboardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {}
