package co.edu.poli.tutorship.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table (name="tutorias")
public class Tutoria {
	
	@Id
	private int numero_tutoria;
	
	@Column(name="nombre_profesor")
	private String nombre_profesor;
	
	@Column(name="fecha_hora")
	private String fecha_hora;
	
	@Column(name="detalles")
	private String detalles;
	
	@ManyToOne
	@JoinColumn(name="ubicacion_cod")
	private Ubicacion ubicaciones;
	
	public Tutoria(){
	}
	
	public Tutoria(int numero_tutoria, String nombre_profesor, String fecha_hora, String detalles,
			Ubicacion ubicacion) {
		super();
		this.numero_tutoria = numero_tutoria;
		this.nombre_profesor = nombre_profesor;
		this.fecha_hora = fecha_hora;
		this.detalles = detalles;
		this.ubicaciones = ubicacion;
	}

	public int getNumero_tutoria() {
		return numero_tutoria;
	}

	public void setNumero_tutoria(int numero_tutoria) {
		this.numero_tutoria = numero_tutoria;
	}

	public String getNombre_profesor() {
		return nombre_profesor;
	}

	public void setNombre_profesor(String nombre_profesor) {
		this.nombre_profesor = nombre_profesor;
	}

	public String getFecha_hora() {
		return fecha_hora;
	}

	public void setFecha_hora(String fecha_hora) {
		this.fecha_hora = fecha_hora;
	}

	public String getDetalles() {
		return detalles;
	}

	public void setDetalles(String detalles) {
		this.detalles = detalles;
	}

	public Ubicacion getUbicacion() {
		return ubicaciones;
	}

	public void setUbicacion(Ubicacion ubicacion) {
		this.ubicaciones = ubicacion;
	}
	
	

}
