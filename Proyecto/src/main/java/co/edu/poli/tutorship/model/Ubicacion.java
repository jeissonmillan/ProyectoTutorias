package co.edu.poli.tutorship.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table (name="ubicaciones")
public class Ubicacion {
	
	@Id
	private int code;
	
	@Column(name="salon")
	private int salon;
	
	@Column(name="detalles")
	private String detalles;
	
	@OneToMany(mappedBy = "ubicaciones",cascade=CascadeType.ALL)
	@JsonIgnore
	private Set<Tutoria> tutoria;
	
	public Ubicacion() {
	}
	
	public Ubicacion(int code, int salon, String detalles) {
		super();
		this.code = code;
		this.salon = salon;
		this.detalles = detalles;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public int getSalon() {
		return salon;
	}

	public void setSalon(int salon) {
		this.salon = salon;
	}

	public String getDetalles() {
		return detalles;
	}

	public void setDetalles(String detalles) {
		this.detalles = detalles;
	}

}
