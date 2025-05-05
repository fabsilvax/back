package com.vecindapp.vecindapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="viviendas")
public class Vivienda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;
    private String direccion;

    @Temporal(TemporalType.DATE)
    private LocalDate fechaRegistro;

    private Double montoAcumulado;
    private Boolean solvente;

    @ManyToOne
    @JoinColumn(name="administrador_id")
    @JsonIgnore
    private Administrador administrador;

    @OneToMany(mappedBy = "vivienda", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Pago> pagos;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public Vivienda(String nombre, String direccion, Double montoAcumulado, Administrador administrador) {
        this.fechaRegistro = LocalDate.now();
        this.nombre = nombre;
        this.direccion = direccion;
        this.administrador = administrador;
        this.montoAcumulado = montoAcumulado;
        this.solvente = montoAcumulado == 0;
    }

    public Vivienda(){

    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public LocalDate getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(LocalDate fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Double getMontoAcumulado() {
        return montoAcumulado;
    }

    public void setMontoAcumulado(Double montoAcumulado) {
        this.montoAcumulado = montoAcumulado;
    }

    public Boolean getSolvente() {
        return solvente;
    }

    public void setSolvente(Boolean solvente) {
        this.solvente = solvente;
    }

    public Administrador getAdministrador() {
        return administrador;
    }

    public void setAdministrador(Administrador administrador) {
        this.administrador = administrador;
    }

    public List<Pago> getPagos() {
        return pagos;
    }

    public void setPagos(List<Pago> pagos) {
        this.pagos = pagos;
    }
}
