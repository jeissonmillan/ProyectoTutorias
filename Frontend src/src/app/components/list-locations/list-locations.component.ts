import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/model/ubicacion';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.css']
})
export class ListLocationsComponent implements OnInit {

  ubicaciones:Ubicacion[];

  constructor(private ubicacionService:UbicacionService) { }

  ngOnInit(): void {
    this.obtenerUbicaciones();
  }

  private obtenerUbicaciones(){
    this.ubicacionService.getAllUbicaciones().subscribe(dato => {
      this.ubicaciones = dato;
    })
  }

  deleteUbicacion(val1:number):void{
    this.ubicacionService.deleteUbicacion(val1).subscribe(data => {
      this.refreshList();
      console.log(data);
    },error => {
      console.log(error);
    })
  }

  retrieveUbicaciones():void{
    this.ubicacionService.getAllUbicaciones().subscribe(dato => {
      this.ubicaciones = dato;
      console.log(dato);
    }, error => {
      console.log(error);
    });
  }

  refreshList(): void{
    this.retrieveUbicaciones();
  }

}
