import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ubicacion } from 'src/app/model/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  ubicacion : Ubicacion = new Ubicacion();

  constructor(private ubicacionServicio:UbicacionService, private router:Router) { }

  ngOnInit(): void {
  }

  SaveUbicacion(){
    this.ubicacionServicio.postUbicacion(this.ubicacion).subscribe(dato => {
      console.log(dato);
      this.GoToListUbicaciones();
    }, error => console.log(error));
  }

  GoToListUbicaciones(){
    this.router.navigate(['/locations'])
  }

  onSumbit(){
    this.SaveUbicacion();
  }

}
