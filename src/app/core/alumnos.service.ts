import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, Observable } from 'rxjs';
import { Alumno } from '../interfaces/alumno';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private httpClient: HttpClient) {}

  private alumnos: Alumno[] = [];

  private alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);
  alumnos$ = this.alumnosSubject.asObservable();

  private generateRandomId(): string {
    return Math.floor(Math.random() * 1000).toString();
  }

  getAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${environment.baseApiUrl}/alumnos`); // Corrección del template literal
  }

  agregarAlumno(alumno: Alumno): Observable<Alumno[]> {
    const nuevoAlumno: Alumno = {
      ...alumno,
      id: alumno.id ?? this.generateRandomId()
    };
    this.alumnos.push(nuevoAlumno);
    this.alumnosSubject.next([...this.alumnos]);
    return this.httpClient.post<Alumno>(`${environment.baseApiUrl}/alumnos`, nuevoAlumno) // Corrección del template literal
      .pipe(concatMap(() => this.getAlumnos()));
  }

  editarAlumno(alumnoEditado: Alumno): Observable<Alumno[]> {
    this.alumnos = this.alumnos.map(alumno =>
      alumno.id === alumnoEditado.id ? { ...alumnoEditado } : alumno
    );
    this.alumnosSubject.next([...this.alumnos]);
    return this.httpClient.patch<Alumno>(`${environment.baseApiUrl}/alumnos/${alumnoEditado.id}`, alumnoEditado) // Corrección del template literal
      .pipe(concatMap(() => this.getAlumnos()));
  }

  eliminarAlumno(id: string): Observable<Alumno[]> {
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
    this.alumnosSubject.next([...this.alumnos]);
    return this.httpClient.delete<Alumno>(`${environment.baseApiUrl}/alumnos/${id}`) // Corrección del template literal
      .pipe(concatMap(() => this.getAlumnos()));
  }
}
