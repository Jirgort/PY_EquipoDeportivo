import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(private http: HttpClient) {}

  createClass(classes: any) {
    return this.http.post<any>(`${environment.URL}/createClass`, classes);
  }

  readClasses(): Observable<any> {
    return this.http.get(`${environment.URL}/class`);
  }

  readNews(): Observable<any> {
    return this.http.get(`${environment.URL}/news`);
  }
  getClassesType() {
    return this.http.get(`${environment.URL}/classesTypes`);
  }

  newClassesType(event: any) {
    return this.http.post<any>(`${environment.URL}/createClassesType`, event);
  }

  deleteClassesType(id: string): Observable<any> {
    return this.http.delete(`${environment.URL}/classesTypes/delete/${id}`);
  }
}
