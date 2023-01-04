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
}
