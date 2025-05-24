package com.vecindapp.vecindapp.service;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.model.Vivienda;
import com.vecindapp.vecindapp.model.ZonaC;
import com.vecindapp.vecindapp.repository.ZonaCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public class ZonaCService {
    @Autowired
    private ZonaCRepository zonaCRepository;

    public ResponseEntity<ZonaC> crearZonaC(ZonaC zonac, Administrador administrador){
        Optional<ZonaC> ZonaCEncontrada = zonaCRepository.findByNombreAndAdministradorId(zonac.getNombre(), administrador.getId());
        if(ZonaCEncontrada.isPresent()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
        ZonaC nuevaZonaC = new ZonaC(zonac.getNombre(), zonac.getCapacidad(), administrador);
        this.zonaCRepository.save(nuevaZonaC);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaZonaC);
    }

    public List<ZonaC> obtenerZonaCDeAdministrador(Integer administradorId){
        return this.zonaCRepository.findByAdministradorId(administradorId);
    }

    public ResponseEntity<ZonaC> modificarZonaC(Integer zonaCId, ZonaC zonaCNueva){
        Optional<ZonaC> zonaCOptional = this.zonaCRepository.findById(zonaCId);
        if(zonaCOptional.isPresent()){
            ZonaC zonaCVieja = zonaCOptional.get();
            zonaCVieja.setCapacidad(zonaCNueva.getCapacidad());
            zonaCVieja.setNombre(zonaCNueva.getNombre());
            //zonaCVieja.setReserva(zonaCNueva.getReserva);
            this.zonaCRepository.save(zonaCVieja);
            return  ResponseEntity.status(HttpStatus.ACCEPTED).body(zonaCVieja);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }
}
