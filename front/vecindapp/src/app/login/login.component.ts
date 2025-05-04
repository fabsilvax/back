import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, MatButtonModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private adminService =  inject(AdministradorService);
  private router = inject(Router);

  loginValid: boolean = true;
  loginView: boolean = true;
  loginForm = new FormGroup(
    {
      name: new FormControl("testing", [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      password: new FormControl("testing123", [Validators.required, Validators.minLength(5), Validators.maxLength(12)])
    }
  )
  isButtonDisabled(): boolean{
    const name = this.loginForm.controls["name"];
    const password = this.loginForm.controls["password"];
    return (name.invalid && (name.touched || name.dirty)) ||
         (password.invalid && (password.touched || password.dirty));
  }

  login(){
  const administrador: Administrador = {
    nombre: this.loginForm.value.name ?? '',
    clave: this.loginForm.value.password ?? ''
  }
  this.adminService.loggearAdministrador(administrador)
  .subscribe({
    next: (response) => {
      if(response.status == 202){
        console.log(response.body)
        localStorage.setItem('administradorLoggeado', JSON.stringify(response.body));
        this.router.navigate(['/home']);
      }
    },
    error: (error) => {
      console.error('Uy', error.status)
    }
  })

  }

  crearCuenta(){
    const administrador: Administrador = {
      nombre: this.loginForm.value.name ?? '',
      clave: this.loginForm.value.password ?? ''
    }



  }

  cambiarVista(){
    this.loginView = !this.loginView
    console.log(this.loginView)
  }
   
}
