import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { ViviendasService } from '../services/viviendas/viviendas.service';
import { Vivienda } from '../model/vivienda.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
export interface DialogData {
  id:number
}

@Component({
  selector: 'app-modify-vivienda-dialog',
  imports: [MatDialogModule, FormsModule, MatLabel, MatFormField, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule   ],
  templateUrl: './modify-vivienda-dialog.component.html',
  styleUrl: './modify-vivienda-dialog.component.css'
})
export class ModifyViviendaDialogComponent {
  modifyViviendaForm: any;
  constructor(
    private dialogRef: MatDialogRef<ModifyViviendaDialogComponent>,
    private viviendaService: ViviendasService,
    @Inject(MAT_DIALOG_DATA) public data: Vivienda
  ){
    this.modifyViviendaForm = new FormGroup({
      nombre: new FormControl(this.data.nombre, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      direccion: new FormControl(this.data.direccion, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      montoAcumulado: new FormControl(this.data.montoAcumulado, [Validators.required])
    })
  }

  

  submit(){
    const viviendaNueva: Vivienda = {
      nombre: this.modifyViviendaForm.value.nombre?? '',
      direccion: this.modifyViviendaForm.value.direccion?? '',
      montoAcumulado: this.modifyViviendaForm.value.montoAcumulado?? 0
    }
    console.log('vivienda nueva ', viviendaNueva)
    this.viviendaService.modificarVivienda(this.data.id?? 0, viviendaNueva)
    .subscribe({
      next: (response) => {
        console.log(response)
        window.location.reload()
      }
    })
  }

  cancel(){
    this.dialogRef.close();
  }

  isButtonDisabled(): boolean{
    const nombre = this.modifyViviendaForm.controls["nombre"];
    const direccion = this.modifyViviendaForm.controls["direccion"];
    const montoAcumulado = this.modifyViviendaForm.controls["montoAcumulado"];
    return (nombre.invalid && (nombre.touched || nombre.dirty)) ||
         (direccion.invalid && (direccion.touched || direccion.dirty) || ((nombre == null)||(direccion==null)||(montoAcumulado==null)));
  }

}


