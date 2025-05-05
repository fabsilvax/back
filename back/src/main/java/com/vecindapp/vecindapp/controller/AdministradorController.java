package com.vecindapp.vecindapp.controller;

import com.vecindapp.vecindapp.model.Administrador;
import com.vecindapp.vecindapp.service.AdministradorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class AdministradorController {

    @Autowired
    private AdministradorService administradorService;

    @PostMapping("/administrador/login")
    public ResponseEntity<Administrador> LogIn(@RequestBody Administrador administradorActual){
        return administradorService.iniciarSesion(administradorActual.getNombre(), administradorActual.getClave());
    }

    @PostMapping("/administrador/crear")
    public ResponseEntity<Administrador> crearAdministrador(@RequestBody Administrador nuevoAdminsitrador){
        return administradorService.crearAdministrador(nuevoAdminsitrador);
    }

    @GetMapping("/administrador/buscar")
    public ResponseEntity<Administrador> encontrarPorId(@RequestParam Integer administradorId){
        return administradorService.encontrarPorId(administradorId);
    }
}
