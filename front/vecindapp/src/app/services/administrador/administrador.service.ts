import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Administrador } from '../../model/administrador.interface';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private http = inject(HttpClient);

  crearAdministrador(administrador: Administrador){
    return this.http.post<HttpResponse<Administrador>>("http://localhost:8080/administrador/crear", administrador);
  }

  loggearAdministrador(administrador: Administrador){
    return this.http.post<HttpResponse<Administrador>>("http://localhost:8080/administrador/login", administrador, {observe: 'response'});
  }

  buscarAdministradorPorId(administradorId: number){
    return this.http.get<HttpResponse<Administrador>>("http://localhost:8080/administrador/buscar",{params: {administradorId: administradorId}} )
  }
}
