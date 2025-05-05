import { Administrador } from "./administrador.interface";
import { Vivienda } from "./vivienda.interface";

export interface ViviendaAdministradorDTO{
    vivienda:Vivienda;
    administrador:Administrador
}