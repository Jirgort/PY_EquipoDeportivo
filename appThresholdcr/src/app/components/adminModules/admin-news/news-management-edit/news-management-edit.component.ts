import { Component } from '@angular/core';
import { NewsService } from '../../../../services/news.service';

@Component({
  selector: 'app-news-management-edit',
  templateUrl: './news-management-edit.component.html',
  styleUrls: ['./news-management-edit.component.css'],
})
export class NewsManagementEditComponent {
  allNews: any = ['1', '2', '3'];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  private getNews() {
    this.newsService.readNews().subscribe({
      next: (response: any) => {
        console.log('GETTIN NEWS');
        this.allNews = response;
        console.log(this.allNews);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
