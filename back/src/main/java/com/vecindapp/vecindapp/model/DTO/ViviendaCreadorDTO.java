package com.vecindapp.vecindapp.model.DTO;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.model.Vivienda;

public class ViviendaCreadorDTO {
    private Vivienda vivienda;
    private Administrador administrador;

    public ViviendaCreadorDTO(){

    }

    public ViviendaCreadorDTO(Vivienda vivienda, Administrador administrador){
        this.vivienda = vivienda;
        this.administrador = administrador;
    }

    public Vivienda getVivienda() {
        return vivienda;
    }

    public void setVivienda(Vivienda vivienda) {
        this.vivienda = vivienda;
    }

    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }
}
