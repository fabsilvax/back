package com.vecindapp.vecindapp.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="administradores")
public class Administrador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nombre;
    private String clave;
    private Integer diasHabiles;
    private Double recargo;
    private Double montoPago;

    @OneToMany(mappedBy = "administrador", cascade = CascadeType.ALL)
    private List<Vivienda> viviendas;

    @OneToMany(mappedBy = "administrador", cascade = CascadeType.ALL)
    private List<Pago> pagos;

    public Administrador(){}

    public Administrador(String nombre, String clave){
        this.nombre = nombre;
        this.clave = clave;
        this.id = id;
    }

    public Administrador(Integer id, String nombre, String clave, Integer diasHabiles, Double recargo, Double montoPago, List<Vivienda> viviendas, List<Pago> pagos) {
        this.id = id;
        this.nombre = nombre;
        this.clave = clave;
        this.diasHabiles = diasHabiles;
        this.recargo = recargo;
        this.montoPago = montoPago;
        this.viviendas = viviendas;
        this.pagos = pagos;
    }

    public String getNombre() {
        return nombre;
    }

    public String getClave(){
        return clave;
    }

    public Integer getId(){
        return id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public Integer getDiasHabiles() {
        return diasHabiles;
    }

    public void setDiasHabiles(Integer diasHabiles) {
        this.diasHabiles = diasHabiles;
    }

    public Double getRecargo() {
        return recargo;
    }

    public void setRecargo(Double recargo) {
        this.recargo = recargo;
    }

    public Double getMontoPago() {
        return montoPago;
    }

    public void setMontoPago(Double montoPago) {
        this.montoPago = montoPago;
    }

    public List<Vivienda> getViviendas() {
        return viviendas;
    }

    public void setViviendas(List<Vivienda> viviendas) {
        this.viviendas = viviendas;
    }

    public List<Pago> getPagos() {
        return pagos;
    }

    public void setPagos(List<Pago> pagos) {
        this.pagos = pagos;
    }
}
