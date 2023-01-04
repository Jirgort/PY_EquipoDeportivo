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

  getFuncionarios(): Observable<any>{
    return this.http.get(`${environment.URL}/Sports`);
  }
}
