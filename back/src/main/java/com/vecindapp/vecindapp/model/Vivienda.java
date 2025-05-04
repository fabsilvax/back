package com.vecindapp.vecindapp.model;

import jakarta.persistence.*;

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
    private Date fechaRegistro;

    private Double montoAcumulado;
    private Boolean solvente;

    @ManyToOne
    @JoinColumn(name="administrador_id")
    private Administrador administrador;

    @OneToMany(mappedBy = "vivienda", cascade = CascadeType.ALL)
    private List<Pago> pagos;
}
