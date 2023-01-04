import { Component } from '@angular/core';
import { NewsService } from '../../../../services/news.service';

@Component({
  selector: 'app-news-management-read',
  templateUrl: './news-management-read.component.html',
  styleUrls: ['./news-management-read.component.css'],
})
export class NewsManagementReadComponent {
  news: any = ['1', '2', '3'];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  private getNews() {
    this.newsService.readNews().subscribe({
      next: (response: any) => {
        console.log('holaaaaaaaaaaaaaaaa');
        this.news = response;
        console.log(this.news);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
