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
}
