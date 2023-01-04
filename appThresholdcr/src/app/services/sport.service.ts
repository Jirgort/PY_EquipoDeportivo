import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor( private http: HttpClient ) { }

  getSports(){
    return this.http.get(`${environment.URL}/Sports`);
  }

  getSport(id: string): Observable<any> {
    return this.http.get(`${environment.URL}/Sport/${id}`);
  }

  getFuncionarios(): Observable<any>{
    return this.http.get(`${environment.URL}/Sports`);
  }

  newSport(user: any) {
    return this.http.post<any>(`${environment.URL}/registrarDeporte`, user);
  }

  updateSport(id: string, data: any): Observable<any> {
    return this.http.put(`${environment.URL}/Sports/put/${id}`, data);
  }

  deleteSport(id: string): Observable<any> {
    return this.http.delete(`${environment.URL}/Sports/delete/${id}`);
  }
}
