package com.vecindapp.vecindapp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="ZonaComun_id")
public class ZonaC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private int capacidad;
    private boolean reserva;

    @ManyToOne
    @JoinColumn(name="administrador_id")
    @JsonIgnore
    private Administrador administrador;

    public ZonaC() {
    }

    public ZonaC(String nombre, int capacidad) {
        this.nombre = nombre;
        this.capacidad = capacidad;
    }

    public ZonaC(String nombre, int capacidad, Administrador administrador) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.administrador = administrador;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public boolean isReserva() {
        return reserva;
    }

    public void setReserva(boolean reserva) {
        this.reserva = reserva;
    }

    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }

}
