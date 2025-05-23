import { Component, EventEmitter, inject, Output } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdministradorService } from '../services/administrador/administrador.service';
import { Administrador } from '../model/administrador.interface';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdministradorCreadoDialogComponent } from '../administrador-creado-dialog/administrador-creado-dialog.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private adminService =  inject(AdministradorService);
  private router = inject(Router);
  private dialog = inject(MatDialog)
  @Output() loggedInEvent = new EventEmitter<boolean>();
  loginValid: boolean = true;
  createAccountValid: boolean= true;
  loginView: boolean = true;

  loginForm = new FormGroup(
    {
      name: new FormControl("testing", [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      password: new FormControl("testing123", [Validators.required, Validators.minLength(5), Validators.maxLength(12)])
    }
  
  )
  createAdminForm = new FormGroup(
    {
     name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
     password: new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
     passwordVerification: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(12)]) 
    }
  )
  isButtonDisabled(): boolean{
    const name = this.loginForm.controls["name"];
    const password = this.loginForm.controls["password"];
    return (name.invalid && (name.touched || name.dirty)) ||
         (password.invalid && (password.touched || password.dirty));
  }

  login(){
  let responseBody : Administrador;
  const administrador: Administrador = {
    nombre: this.loginForm.value.name ?? '',
    clave: this.loginForm.value.password ?? ''
  }
  this.adminService.loggearAdministrador(administrador)
  .subscribe({
    next: (response) => {
      if(response.status == 202){
        if(response.body){
          localStorage.setItem('administradorLoggeado', JSON.stringify(response.body));

          this.loggedInEvent.emit(true);
          this.loginEvent.emit(response.body as unknown as Administrador);
          this.router.navigate([`dashboard/${(response.body as unknown as Administrador).id}`]);
        }
        
        
      }
    },
    error: (error) => {
      console.error('Uy', error.status)
    }
  })

  }

  openDialog(nombre: string){
    const dialogRef = this.dialog.open(AdministradorCreadoDialogComponent, {data: nombre})
  }

  crearCuenta(){
    const password = this.createAdminForm.value.password?? ''
    const passwordVerification = this.createAdminForm.value.passwordVerification??''
    if(password != passwordVerification){
      this.createAccountValid = false;
      return;
    }
    const administrador: Administrador = {
      nombre: this.createAdminForm.value.name ?? '',
      clave: this.createAdminForm.value.password ?? ''
    }
    this.adminService.crearAdministrador(administrador)
    .subscribe({
      next: (response) => {
        if(response.status == 201){
          console.log('A')
          this.openDialog(this.createAdminForm.value.name?? '');
        }
      },
      error: (error) => {
        console.log('uy', error.message)
      }
    })



  }

  

  cambiarVista(){
    this.loginView = !this.loginView
    console.log(this.loginView)
  }

  @Output() loginEvent = new EventEmitter<Administrador>();
   
}
