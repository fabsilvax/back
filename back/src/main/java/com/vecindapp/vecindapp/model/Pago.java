package com.vecindapp.vecindapp.model;

import jakarta.persistence.*;
import org.springframework.jdbc.support.lob.TemporaryLobCreator;

import java.util.Date;

@Entity
@Table(name="pagos")
public class Pago {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Double monto;

    @Temporal(TemporalType.DATE)
    private Date fechaPago;


    @ManyToOne
    @JoinColumn(name="administrador_id")
    private Administrador administrador;

    @ManyToOne
    @JoinColumn(name="vivienda_id")
    private Vivienda vivienda;
}
