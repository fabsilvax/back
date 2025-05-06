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
import { Administrador } from '../model/administrador.interface';
import { ViviendaAdministradorDTO } from '../model/viviendaAdministradorDTO.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatDivider, MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-viviendas',
  imports: [MatTabsModule, MatCardModule, MatPaginatorModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatProgressSpinnerModule, MatListModule, MatDividerModule, MatTableModule],
  templateUrl: './viviendas.component.html',
  styleUrl: './viviendas.component.css'
})
export class ViviendasComponent {
  columnasMostradas: string[] = ['Nombre', 'Direccion', 'Deuda', 'Acciones']


  showSpinner : boolean = false;
  errorMessage: boolean = false;
  viviendas: Array<Vivienda> = []
  viviendasPaginadas: Array<Vivienda> = []
  private viviendaService = inject(ViviendasService)
  private route = inject(ActivatedRoute)
  id: number = 0;
  private _snackBar = inject(MatSnackBar);
  crearViviendaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    montoAcumulado: new FormControl(0, [Validators.required])
  })

  async ngOnInit(){
   
    this.obtenerViviendas();
    

  }

  obtenerViviendas(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.viviendaService.obtenerViviendasDeAdministrador(this.id)
    .subscribe({
      next: (response) => {
        if(response){
          console.log(response)
          this.viviendas = response as unknown as Array<Vivienda>
          this.viviendasPaginadas = this.viviendas.slice(0, 10)
        }
      },
      error: (error) => {
        console.log('Uy '+ error.status)
      }
    })
  }

  onPageChange(event: PageEvent){
    console.log(`${event.pageIndex} and ${event.pageSize}`)
    this.updatePage(event.pageIndex, event.pageSize);
  }

  updatePage(index: number, size: number){
    const start = index * size;
    const end = start+size;
    this.viviendasPaginadas = this.viviendas.slice(start,end);
  }

  crearVivienda(){
    this.errorMessage = false;
    const viviendaNueva: Vivienda = {
      nombre: this.crearViviendaForm.value.nombre?? '',
      direccion: this.crearViviendaForm.value.direccion?? '',
      montoAcumulado: this.crearViviendaForm.value.montoAcumulado?? 0
    }

    const administradorDueno: Administrador = JSON.parse(localStorage.getItem('administradorLoggeado') || '')

    const DTO: ViviendaAdministradorDTO = {
      vivienda: viviendaNueva,
      administrador: administradorDueno
    }

    this.viviendaService.crearVivienda(DTO)
    .subscribe({
      next:(response) =>{
        if(response.status != 201){
          this.obtenerViviendas();
          this.showSpinner = true;
        //Se necesita manejo de errores aqui
          setTimeout(() => {
            this.showSpinner = false;
          }, 1000)
          this._snackBar.open('Vivienda Creada!', 'Ok')
        }          
        

      },
      error:() => {
        this.errorMessage = true;
      }
    })
    this.obtenerViviendas()
    
  }
  isButtonDisabled(): boolean{
    const nombre = this.crearViviendaForm.controls["nombre"];
    const direccion = this.crearViviendaForm.controls["direccion"];
    const montoAcumulado = this.crearViviendaForm.controls["montoAcumulado"];
    return (nombre.invalid && (nombre.touched || nombre.dirty)) ||
         (direccion.invalid && (direccion.touched || direccion.dirty) || ((nombre == null)||(direccion==null)||(montoAcumulado==null)));
  }
}
