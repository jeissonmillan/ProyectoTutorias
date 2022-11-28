import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutoria } from 'src/app/model/tutoria';
import { Ubicacion } from 'src/app/model/ubicacion';
import { TutoriaService } from 'src/app/services/tutoria.service';

@Component({
  selector: 'app-add-tutoria',
  templateUrl: './add-tutoria.component.html',
  styleUrls: ['./add-tutoria.component.css']
})
export class AddTutoriaComponent implements OnInit {

  tutoria : Tutoria = new Tutoria();
  ubicaciones: Ubicacion[];

  constructor(private tutoriaServicio:TutoriaService, private router:Router) { }

  ngOnInit(): void {
    
  }

  SaveTutoria(){
    this.tutoriaServicio.postTutoria(this.tutoria).subscribe(dato => {
      console.log(dato);
      this.GoToListTutorias();
    }, error => console.log(error));
  }

  GoToListTutorias(){
    this.router.navigate(['/tutorias'])
  }

  onSumbit(){
    this.SaveTutoria();
  }

}
