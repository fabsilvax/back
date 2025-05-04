package com.vecindapp.vecindapp.repository;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.model.Pago;
import com.vecindapp.vecindapp.model.Vivienda;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PagoRepository extends JpaRepository<Pago, Integer> {
    List<Pago> findByAdministrador(Administrador administrador);
    List<Pago> findByVivienda(Vivienda vivienda);

}
