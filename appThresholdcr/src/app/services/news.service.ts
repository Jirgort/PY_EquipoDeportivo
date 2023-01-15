import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  createNews(news: any) {
    return this.http.post<any>(`${environment.URL}/createNews`, news);
  }

  readNews(): Observable<any> {
    return this.http.get(`${environment.URL}/news`);
  }

  deleteNews(id: string): Observable<any> {
    return this.http.delete(`${environment.URL}/news/delete/${id}`);
  }

  voteNews(id: string, data: any): Observable<any> {
    return this.http.put(`${environment.URL}/news/put/${id}`, data);
  }
}
