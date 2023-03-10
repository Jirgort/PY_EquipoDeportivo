import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TrainersService {
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los entrenadores
   * @returns {Observable<any>} Observable con los entrenadores en formato json
   */
  getTrainers() {
    return this.http.get(`${environment.URL}/trainers`);
  }

  /**
   * Obtiene entrenador por su id
   * @param id id del entrenador
   * @returns {Observable<any>} Observable con el entrenador en formato json
   */
  getTrainer(id: string): Observable<any> {
    return this.http.get(`${environment.URL}/trainers/${id}`);
  }

  newTrainer(user: any) {
    console.log('DATA IN SERVICE: ' + JSON.stringify(user));
    return this.http.post<any>(`${environment.URL}/registrarEntrenador`, user);
  }

  getFuncionarios(): Observable<any> {
    return this.http.get(`${environment.URL}/trainers`);
  }

  updateTrainer(id: string, data: any): Observable<any> {
    return this.http.put(`${environment.URL}/trainers/put/${id}`, data);
  }

  deleteTrainer(id: string): Observable<any> {
    return this.http.delete(`${environment.URL}/trainers/delete/${id}`);
  }
}
