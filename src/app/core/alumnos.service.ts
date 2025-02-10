import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../interfaces/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumno[] = [
    { id: this.generateRandomId(), nombre: 'Kevin', apellido: 'Davezac' },
    { id: this.generateRandomId(), nombre: 'Santutu', apellido: 'Angelini' },
    { id: this.generateRandomId(), nombre: 'Lucas', apellido: 'Jaume' },
    { id: this.generateRandomId(), nombre: 'Francisco', apellido: 'Bonfanti' },
    { id: this.generateRandomId(), nombre: 'Matias', apellido: 'Lencina' },

  ];

  private alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
  alumnos$ = this.alumnosSubject.asObservable();

  private generateRandomId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  getAlumnos(): Observable<Alumno[]> {
    return this.alumnos$;
  }

  agregarAlumno(alumno: Alumno): void {
    const nuevoAlumno: Alumno = {
      ...alumno,
      id: alumno.id ?? this.generateRandomId() // Solo genera un ID si no existe
    };
    this.alumnos.push(nuevoAlumno);
    this.alumnosSubject.next([...this.alumnos]);
  }
  

  editarAlumno(alumnoEditado: Alumno): void {
    this.alumnos = this.alumnos.map(alumno =>
      alumno.id === alumnoEditado.id ? { ...alumnoEditado } : alumno
    );
    this.alumnosSubject.next([...this.alumnos]);
  }

  eliminarAlumno(id: number): void {
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
    this.alumnosSubject.next([...this.alumnos]);
  }
}
