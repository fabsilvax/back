package com.vecindapp.vecindapp.repository;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.model.Vivienda;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ViviendaRepository extends JpaRepository<Vivienda, Integer> {
    List<Vivienda> findByAdministradorId(Integer administradorId);
    Optional<Vivienda> findByNombreAndAdministradorId(String nombre, Integer administradorId);
}
