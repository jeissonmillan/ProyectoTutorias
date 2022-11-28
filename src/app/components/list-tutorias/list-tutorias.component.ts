import { Component, OnInit } from '@angular/core';
import { Tutoria } from 'src/app/model/tutoria';
import { Ubicacion } from 'src/app/model/ubicacion';
import { TutoriaService } from 'src/app/services/tutoria.service';

@Component({
  selector: 'app-list-tutorias',
  templateUrl: './list-tutorias.component.html',
  styleUrls: ['./list-tutorias.component.css']
})
export class ListTutoriasComponent implements OnInit {

  tutorias:Tutoria[];
  ubicaciones: Ubicacion[];
  currentTutoria = Tutoria;

  constructor(private tutoriaService:TutoriaService) { }

  ngOnInit(): void {
    this.obtenerTutorias();
  }

  private obtenerTutorias(){
    this.tutoriaService.getAll().subscribe(dato => {
      this.tutorias = dato;
    })
  }

  deleteTutoria(val1:number):void{
    this.tutoriaService.deleteTutoria(val1).subscribe(data => {
      this.refreshList();
      console.log(data);
    },error => {
      console.log(error);
    })
  }
/*
  updateTutoria(id:number): void {
    this.tutoriaService.updateTutoria(id, this.currentTutoria)
       .subscribe(
         data => {
           this.refreshList();
           console.log(data);
         },
         error => {
           console.log(error);
         });
   }
*/
  retrieveTutorias():void{
    this.tutoriaService.getAll().subscribe(dato => {
      this.tutorias = dato;
      console.log(dato);
    }, error => {
      console.log(error);
    });
  }
  
  refreshList(): void{
    this.retrieveTutorias();
  }

}
