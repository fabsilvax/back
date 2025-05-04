import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from "./login/login.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, MainComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vecindapp';
  loggedIn: boolean = false;
  private router = inject(Router)
  constructor(){
      
      const administradorLoggeado = JSON.parse(localStorage.getItem('administradorLoggeado')!!)
      if(administradorLoggeado){
        this.loggedIn = true;
  }}

  confirmLogIn(){
    this.loggedIn = true;
  }
}
