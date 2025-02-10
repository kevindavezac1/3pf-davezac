import { Component, Inject, OnInit } from '@angular/core';
import { Alumno } from '../../../../interfaces/alumno';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-edit-alumno',
  standalone: false,
  
  templateUrl: './dialog-edit-alumno.component.html',
  styleUrl: './dialog-edit-alumno.component.css'
})
export class DialogEditAlumnoComponent implements OnInit{
  alumnoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogEditAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
  ) {}

  ngOnInit(): void {
    this.alumnoForm = this.fb.group({
      nombre: [this.data?.nombre || '', [Validators.required]],
      apellido: [this.data?.apellido || '', [Validators.required]]
    });
  }

  onSave(): void {
    if (this.alumnoForm.valid) {
      this.dialogRef.close(this.alumnoForm.value); 
    }
  }

  onCancel(): void {
    this.dialogRef.close(); 
  }
}
