import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AthleteService {

  constructor(private http: HttpClient ) { }

  /**
   * Obtiene todos los deportistas
   * @returns {Observable<any>} Observable con los deportistas en formato json 
   */
   getAthletes(){
    return this.http.get(`${environment.URL}/athletes`);
  }

  /**
   * Obtiene deportista por su id
   * @param id id del deportista
   * @returns {Observable<any>} Observable con el deportista en formato json
   */
  getAthlete(id:string):Observable<any>{
    return this.http.get(`${environment.URL}/athlete/${id}`);
  }
  
  newAthlete(user: any) {
    return this.http.post<any>(`${environment.URL}/registrarAtleta`, user);
  }

  getFuncionarios(): Observable<any>{
    return this.http.get(`${environment.URL}/athletes`);
  }

}
