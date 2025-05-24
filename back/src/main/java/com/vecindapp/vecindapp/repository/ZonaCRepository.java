package com.vecindapp.vecindapp.repository;

import com.vecindapp.vecindapp.model.ZonaC;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ZonaCRepository extends JpaRepository<ZonaC, Integer> {
    List<ZonaC> findByAdministradorId(Integer administradorId);

    Optional<ZonaC> findByNombreAndAdministradorId(String nombre, Integer administradorId);
}