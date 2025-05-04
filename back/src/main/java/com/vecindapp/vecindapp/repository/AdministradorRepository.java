package com.vecindapp.vecindapp.repository;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.service.AdministradorService;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdministradorRepository extends JpaRepository<Administrador, Integer> {
    Optional<Administrador> findByNombreAndClave(String nombre, String clave);

    Optional<Administrador> findByNombre(String nombre);
}
