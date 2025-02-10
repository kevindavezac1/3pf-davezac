
import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../../interfaces/alumno';


@Pipe({
  name: 'fullName',
  standalone: false,  // Si lo vas a usar como standalone, también está bien.
})
export class FullNamePipe implements PipeTransform {
  
  transform(alumno: Alumno): string {
    return `${alumno.nombre} ${alumno.apellido}`;  // Concatenar nombre y apellido
  }
}

