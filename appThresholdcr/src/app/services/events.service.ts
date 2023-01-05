import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient ) { }

  /**
   * Obtiene todos los eventos
   * @returns {Observable<any>} Observable con los eventos en formato json 
   */
   getEvents(){
    return this.http.get(`${environment.URL}/events`);
  }
 getEventsType(){
    return this.http.get(`${environment.URL}/eventsTypes`);
  }
  /**
   * Obtiene evento por su id
   * @param id id del evento
   * @returns {Observable<any>} Observable con el evento en formato json
   */
  getEvent(id:string):Observable<any>{
    return this.http.get(`${environment.URL}/event/${id}`);
  }
  
  newEvent(event: any) {
    return this.http.post<any>(`${environment.URL}/createEvent`, event);
  }
  newEventType(event: any) {
    return this.http.post<any>(`${environment.URL}/createEventType`, event);
  }

  getFuncionarios(): Observable<any>{
    return this.http.get(`${environment.URL}/events`);
  }
 

  updateEvent(id: string, data: any): Observable<any> {
    return this.http.put(`${environment.URL}/events/put/${id}`, data);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${environment.URL}/events/delete/${id}`);
  }
  deleteEventType(id: string): Observable<any> {
    return this.http.delete(`${environment.URL}/eventsTypes/delete/${id}`);
  }

}
