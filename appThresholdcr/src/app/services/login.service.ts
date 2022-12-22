import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL='http://localhost:3000/api'
  constructor(private http: HttpClient,private router: Router) { }
  /*signUp(user:any){
    return this.http.post<any>(this.URL+'/sigup',user);
  }*/
  signIn(user: any) {
    return this.http.post<any>(`${environment.URL}/signin`, user);
  }
}
