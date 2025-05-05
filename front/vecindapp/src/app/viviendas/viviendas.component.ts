import { Component, inject } from '@angular/core';
import { Vivienda } from '../model/vivienda.interface';
import { ViviendasService } from '../services/viviendas/viviendas.service';
import { ActivatedRoute } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-viviendas',
  imports: [MatTabsModule, MatCardModule, MatPaginatorModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './viviendas.component.html',
  styleUrl: './viviendas.component.css'
})
export class ViviendasComponent {
  viviendas: Array<Vivienda> = []
  viviendasPaginadas: Array<Vivienda> = []
  private viviendaService = inject(ViviendasService)
  private route = inject(ActivatedRoute)

  crearViviendaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    montoAcumulado: new FormControl(0, [Validators.required])
  })

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.viviendaService.obtenerViviendasDeAdministrador(id)
    .subscribe({
      next: (response) => {
        if(response){
          this.viviendas = response as unknown as Array<Vivienda>
          this.viviendas.forEach(function (value) {
            console.log(value.nombre);
          })
        }
      },
      error: (error) => {
        console.log('Uy '+ error.status)
      }
    })


  }

  onPageChange(event: PageEvent){
    this.updatePage(event.pageIndex, event.pageSize);
  }

  updatePage(index: number, size: number){
    const start = index * size;
    const end = start+size;
    this.viviendasPaginadas = this.viviendas.slice(start,end);
  }

  crearVivienda(){
    
  }
  isButtonDisabled(): boolean{
    const nombre = this.crearViviendaForm.controls["nombre"];
    const direccion = this.crearViviendaForm.controls["direccion"];
    const montoAcumulado = this.crearViviendaForm.controls["montoAcumulado"];
    return (nombre.invalid && (nombre.touched || nombre.dirty)) ||
         (direccion.invalid && (direccion.touched || direccion.dirty) || ((nombre == null)||(direccion==null)||(montoAcumulado==null)));
  }
}
