package com.vecindapp.vecindapp.controller;

import com.vecindapp.vecindapp.model.DTO.ZonaComunCreatorDTO;
import com.vecindapp.vecindapp.model.Vivienda;
import com.vecindapp.vecindapp.service.ZonaCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.vecindapp.vecindapp.model.ZonaC;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
public class ZonaCController {
    @Autowired
    private ZonaCService zonaCService;

    @PostMapping("/ZonasComunes/crear")
    public ResponseEntity<ZonaC> crearZonaC(@RequestBody ZonaComunCreatorDTO zonaComunCreatorDTO){
        return zonaCService.crearZonaC(zonaComunCreatorDTO.getZonac(), zonaComunCreatorDTO.getAdministrador());
    }

    @GetMapping("/ZonasComunes/lista")
    @CrossOrigin(origins = "*")
    public List<ZonaC> obtenerViviendas(@RequestParam Integer administradorId){
        return zonaCService.obtenerZonaCDeAdministrador(administradorId);
    }

    @PutMapping("/ZonasComunes/modificar")
    public ResponseEntity<ZonaC> modificarZonaC(@RequestParam Integer zonaCId, @RequestBody ZonaC zonaC){
        return zonaCService.modificarZonaC(zonaCId, zonaC);
    }

}
