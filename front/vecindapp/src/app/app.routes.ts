import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { ViviendasComponent } from './viviendas/viviendas.component';
import { PagosComponent } from './pagos/pagos.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    
    {
        path:'viviendas',
        component:ViviendasComponent
    },
    {
        path:'pagos',
        component:PagosComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    }
];
