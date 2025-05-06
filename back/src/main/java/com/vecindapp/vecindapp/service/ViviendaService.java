package com.vecindapp.vecindapp.service;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.model.Vivienda;
import com.vecindapp.vecindapp.repository.ViviendaRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ViviendaService {
    @Autowired
    private ViviendaRepository viviendaRepository;

    public ResponseEntity<Vivienda> crearVivienda(Vivienda vivienda, Administrador administrador){
        Optional<Vivienda> viviendaEncontrada = viviendaRepository.findByNombreAndAdministradorId(vivienda.getNombre(), administrador.getId());
        if(viviendaEncontrada.isPresent()){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
        Vivienda nuevaVivienda = new Vivienda(vivienda.getNombre(), vivienda.getDireccion(), vivienda.getMontoAcumulado(), administrador);
        this.viviendaRepository.save(nuevaVivienda);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaVivienda);
    }


    public List<Vivienda> obtenerViviendasDeAdministrador(Integer administradorId){
        return this.viviendaRepository.findByAdministradorId(administradorId);
    }

    public ResponseEntity<Vivienda> modificarVivienda(Integer viviendaId, Vivienda viviendaNueva){
        Optional<Vivienda> viviendaOptional = this.viviendaRepository.findById(viviendaId);
        if(viviendaOptional.isPresent()){
            Vivienda viviendaVieja = viviendaOptional.get();
            viviendaVieja.setDireccion(viviendaNueva.getDireccion());
            viviendaVieja.setNombre(viviendaNueva.getNombre());
            viviendaVieja.setMontoAcumulado(viviendaNueva.getMontoAcumulado());
            this.viviendaRepository.save(viviendaVieja);
            return  ResponseEntity.status(HttpStatus.ACCEPTED).body(viviendaVieja);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

}
