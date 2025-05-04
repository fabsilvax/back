package com.vecindapp.vecindapp.service;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.repository.AdministradorRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdministradorService {

    @Autowired
    private AdministradorRepository administradorRepository;


    public ResponseEntity<Administrador> crearAdministrador(Administrador administrador){
        Optional<Administrador> administradorEcontrado = administradorRepository.findByNombre(administrador.getNombre());
        if(administradorEcontrado.isPresent()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
        Administrador nuevoAdministrador = new Administrador(administrador.getNombre(), administrador.getClave());
        this.administradorRepository.save(nuevoAdministrador);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoAdministrador);
    }

    public ResponseEntity<Administrador> iniciarSesion(String nombre, String clave){
        Optional<Administrador> administradorEncontrado = administradorRepository.findByNombreAndClave(nombre, clave);
        return administradorEncontrado.map(administrador -> ResponseEntity.status(HttpStatus.ACCEPTED).body(administrador)).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));

    }
}
