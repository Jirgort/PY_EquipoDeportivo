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

  readNews(): Observable<any> {
    return this.http.get(`${environment.URL}/news`);
  }
}
