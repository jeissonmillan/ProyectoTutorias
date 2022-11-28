import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutoria } from '../model/tutoria';

@Injectable({
  providedIn: 'root'
})
export class TutoriaService {

  //Url de springboot
  private baseURL = "http://127.0.0.1:8080/proyecto/tutoria";

  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Tutoria[]>{
    return this.httpClient.get<Tutoria[]>(this.baseURL + "/mostrar");
  }

  postTutoria(tutoria:Tutoria) : Observable<Object>{
    return this.httpClient.post(this.baseURL + "/subir", tutoria);
  }

  updateTutoria(id:number, tutoria:Tutoria) : Observable<Object>{
    return this.httpClient.put(this.baseURL + "/modificar/" + id, tutoria);
  }

  deleteTutoria(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + "/eliminar/" + id);
  }

  getTutoria(id: number): Observable<Tutoria> {
    return this.httpClient.get<Tutoria>(this.baseURL + "/mostrar/" + id);
  }

}