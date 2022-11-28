import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ubicacion } from '../model/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private baseURL = "http://127.0.0.1:8080/proyecto/ubicacion";

  constructor(private httpClient : HttpClient) { }

  getAllUbicaciones():Observable<Ubicacion[]>{
    return this.httpClient.get<Ubicacion[]>(this.baseURL + "/mostrar");
  }

  postUbicacion(ubicacion:Ubicacion) : Observable<Object>{
    return this.httpClient.post(this.baseURL + "/subir", ubicacion);
  }

  deleteUbicacion(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + "/eliminar/" + id);
  }
}
