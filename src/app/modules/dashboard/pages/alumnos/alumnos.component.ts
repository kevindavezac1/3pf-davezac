import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from '../../../../interfaces/alumno';
import { DialogEditAlumnoComponent } from '../dialog-edit-alumno/dialog-edit-alumno.component';
import { AlumnosService } from '../../../../core/alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
  standalone:false
})
export class AlumnosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombreCompleto', 'acciones'];
  dataSource: Alumno[] = [];

  constructor(private matDialog: MatDialog, private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      this.dataSource = alumnos;
    });
  }

  onDelete(id: string): void {
    if (confirm('¿Está seguro de que desea eliminar este alumno?')) {
      this.alumnosService.eliminarAlumno(id).subscribe(alumno=> {
        this.dataSource = alumno;
      });
    }
  }

  onEdit(alumno: Alumno): void {
    this.matDialog
      .open(DialogEditAlumnoComponent, { data: alumno })
      .afterClosed()
      .subscribe(valorFormulario => {
        if (valorFormulario) {
          const alumnoEditado = { ...alumno, ...valorFormulario };
          console.log('alumno editado:', alumnoEditado);
          this.alumnosService.editarAlumno(alumnoEditado).subscribe(alumnos => {
            this.dataSource = alumnos;
          });
        }
      });
  }

  onCreateStudent(): void {
    this.matDialog
      .open(DialogEditAlumnoComponent)
      .afterClosed()
      .subscribe(valorFormulario => {
        if (valorFormulario) {
          this.alumnosService.agregarAlumno(valorFormulario).subscribe(alumnos => {
            this.dataSource = alumnos;
          });;
        }
      });
  }
}
