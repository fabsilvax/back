package com.vecindapp.vecindapp.model.DTO;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.model.ZonaC;

public class ZonaComunCreatorDTO {
    private ZonaC zonac;
    private Administrador administrador;

    public ZonaComunCreatorDTO() {
    }

    public ZonaComunCreatorDTO(ZonaC zonac, Administrador administrador) {
        this.zonac = zonac;
        this.administrador = administrador;
    }

    public ZonaC getZonac() {
        return zonac;
    }

    public void setZonac(ZonaC zonac) {
        this.zonac = zonac;
    }

    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }
}
