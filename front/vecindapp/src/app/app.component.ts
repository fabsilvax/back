import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from "./login/login.component";
import { Administrador } from './model/administrador.interface';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, MainComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vecindapp';
  loggedUser= ''
  loggedIn: boolean = false;
  private router = inject(Router)
  constructor(){
      
      const administradorLoggeado = JSON.parse(localStorage.getItem('administradorLoggeado')!!)
      if(administradorLoggeado){
        this.loggedUser = localStorage.getItem('administradorLoggeado') || ''
        this.loggedIn = true;
  }}

  confirmLogIn(loggedUser: Administrador){
    console.log(loggedUser)
    this.loggedUser = JSON.stringify(loggedUser);
    this.loggedIn = true;
    

  }
}
