package co.edu.poli.tutorship.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import co.edu.poli.tutorship.model.Tutoria;
import co.edu.poli.tutorship.model.Ubicacion;
import co.edu.poli.tutorship.repository.UbicacionRepository;
import io.swagger.annotations.Api;

@Api(tags = {"Class: UbicacionController"}) //tag defined in SwaggerConfig.java
@RestController
@RequestMapping("/proyecto/ubicacion")
public class UbicacionController {
	
	@Autowired
	private UbicacionRepository ubicacionRepository;
	
	@GetMapping("/mostrar")
	public List<Ubicacion> getUbicacion () {
		return ubicacionRepository.findAll();
	}
	
	@GetMapping("/mostrar/{cod}")
	public Ubicacion getUbicacion (@PathVariable int cod) {
	Ubicacion a = ubicacionRepository.findById(cod).get();
		return a;
	}
	
	@PostMapping("/subir")
	public Ubicacion saveUbicacion (@RequestBody Ubicacion ubicacion) {
		ubicacionRepository.save(ubicacion);	
		return ubicacion;
	}
	
	@PutMapping("/modificar/{cod}")
	public Ubicacion putUbicacion(@PathVariable int cod, @RequestBody Ubicacion ubicacion){
		
		Ubicacion a = getUbicacion(cod);
		
		a.setCode(ubicacion.getCode());
		a.setSalon(ubicacion.getSalon());
		a.setDetalles(ubicacion.getDetalles());
		
		ubicacionRepository.save(a);
		return a;
	}
	
	@DeleteMapping("/eliminar/{cod}")
	public Ubicacion delUbicacion(@PathVariable int cod){
		Ubicacion a = getUbicacion(cod);
		ubicacionRepository.deleteById(cod);
		return a;
	}

}
