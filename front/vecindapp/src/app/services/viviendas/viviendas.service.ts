import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ViviendaAdministradorDTO } from '../../model/viviendaAdministradorDTO.interface';
import { Vivienda } from '../../model/vivienda.interface';

@Injectable({
  providedIn: 'root'
})
export class ViviendasService {

  private http = inject(HttpClient);
  
  crearVivienda(DTO: ViviendaAdministradorDTO){
   return this.http.post<HttpResponse<Vivienda>>("http://localhost:8080/viviendas/crear", DTO, {observe: 'response'});
  }

  obtenerViviendasDeAdministrador(administradorId: number){
    return this.http.get<Array<Vivienda>>(`http://localhost:8080/viviendas/lista`, {params: {administradorId: administradorId}})
  }

  modificarVivienda(viviendaId: number, vivienda: Vivienda){
    return this.http.put<HttpResponse<Vivienda>>(`http://localhost:8080/viviendas/modificar`, vivienda, {params: {viviendaId: viviendaId}})
  }

}
