import { Component, computed, inject, Input, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { Administrador } from '../model/administrador.interface';

export type MenuItem = {
  icon:string;
  label:string;
  route?:string;
}

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, RouterModule, MatToolbarModule, MatButtonModule, MatSidenavModule, RouterOutlet, MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {

  @Input() loggedUserString = '';
  loggedUserObject: Administrador = {
    nombre:'',
    clave:''
  }
  private router = inject(Router)
  ngOnInit(){
    this.loggedUserObject = JSON.parse(this.loggedUserString)
  }
  items:Array<any> = [{
    label: "Viviendas",
    link:"viviendas",
    icon:"house"
  },
  {
    label: "Pagos",
    link:"pagos",
    icon:"credit_card"
  },
  {
    label:"Dashboard",
    link:"dashboard",
    icon:"dataset"
  },
  {
    label:"Mi condominio",
    link:"condominio",
    icon:"manage_accounts"
  },
  {
    label:"Zonas Comunes",
    link:"comunes",
    icon:"nature_people"
  }
]

  collapsed = signal(false)
  sidenavWidth = computed(() => this.collapsed() ? '65px':'250px' )

  logout(){
    localStorage.clear();
    window.location.reload()
  }
}
