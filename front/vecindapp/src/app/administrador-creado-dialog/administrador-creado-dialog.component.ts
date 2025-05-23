import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatLabel, MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ViviendasService } from '../services/viviendas/viviendas.service';



@Component({
  selector: 'app-administrador-creado-dialog',
  imports: [MatDialogModule, FormsModule, MatLabel, MatFormField, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './administrador-creado-dialog.component.html',
  styleUrl: './administrador-creado-dialog.component.css'
})
export class AdministradorCreadoDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<AdministradorCreadoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ){
  }

  close(){
    window.location.reload();
    
  }
}
