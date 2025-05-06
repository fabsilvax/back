package com.vecindapp.vecindapp.controller;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.model.DTO.ViviendaCreadorDTO;
import com.vecindapp.vecindapp.model.Vivienda;
import com.vecindapp.vecindapp.service.ViviendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ViviendaController {

    @Autowired
    private ViviendaService viviendaService;

    @PostMapping("/viviendas/crear")
    public ResponseEntity<Vivienda> crearVivienda(@RequestBody ViviendaCreadorDTO viviendaCreadorDTO){
        return viviendaService.crearVivienda(viviendaCreadorDTO.getVivienda(), viviendaCreadorDTO.getAdministrador());
    }

    @GetMapping("/viviendas/lista")
    @CrossOrigin(origins = "*")
    public List<Vivienda> obtenerViviendas(@RequestParam Integer administradorId){
        return viviendaService.obtenerViviendasDeAdministrador(administradorId);
    }

    @PutMapping("/viviendas/modificar")
    public ResponseEntity<Vivienda> modificarVivienda(@RequestParam Integer viviendaId, @RequestBody Vivienda vivienda){
        return viviendaService.modificarVivienda(viviendaId, vivienda);
    }


}
