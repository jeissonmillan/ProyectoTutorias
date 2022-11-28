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
import co.edu.poli.tutorship.repository.TutoriaRepository;

import io.swagger.annotations.Api;

@Api(tags = {"Class: TutoriaController"}) //tag defined in SwaggerConfig.java
@RestController
@RequestMapping("/proyecto/tutoria")
public class TutoriaController {
	
	@Autowired
	private TutoriaRepository tutoriaRepository;
	
	@GetMapping("/mostrar")
	public List<Tutoria> getTutoria () {
		return tutoriaRepository.findAll();
	}
	
	@GetMapping("/mostrar/{num}")
	public Tutoria getTutoria (@PathVariable int num) {
	Tutoria a = tutoriaRepository.findById(num).get();
		return a;
	}
	
	@PostMapping("/subir")
	public Tutoria saveTutoria (@RequestBody Tutoria tutoria) {
		tutoriaRepository.save(tutoria);	
		return tutoria;
	}
	
	@PutMapping("/modificar/{num}")
	public Tutoria putTutoria(@PathVariable int num, @RequestBody Tutoria tutoria){
		
		Tutoria a = getTutoria(num);
		
		a.setNumero_tutoria(tutoria.getNumero_tutoria());
		a.setNombre_profesor(tutoria.getNombre_profesor());
		a.setFecha_hora(tutoria.getFecha_hora());
		a.setDetalles(tutoria.getDetalles());
		a.setUbicacion(tutoria.getUbicacion());
		
		tutoriaRepository.save(a);
		return a;
	}
	
	@DeleteMapping("/eliminar/{num}")
	public Tutoria delTutoria(@PathVariable int num){
		Tutoria a = getTutoria(num);
		tutoriaRepository.deleteById(num);
		//SMSServiceTwilio sms = new SMSServiceTwilio();
		//SMS S = new SMS();
		//sms.sendSMS(S);
	
		
		return a;
	}

}
