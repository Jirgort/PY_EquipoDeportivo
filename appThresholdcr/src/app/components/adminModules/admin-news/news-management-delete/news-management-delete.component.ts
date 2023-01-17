import { Component } from '@angular/core';
import { NewsService } from '../../../../services/news.service';

@Component({
  selector: 'app-news-management-delete',
  templateUrl: './news-management-delete.component.html',
  styleUrls: ['./news-management-delete.component.css'],
})
export class NewsManagementDeleteComponent {
  allNews: any = ['1', '2', '3'];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }
  private getNews() {
    this.newsService.readNews().subscribe({
      next: (response: any) => {
        this.allNews = response;
        //console.log(this.allNews);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteNews(news: any) {
    this.newsService.deleteNews(news._id).subscribe({
      next: (response: any) => {
        //this.allNews = response;
        //console.log(this.allNews);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getNews();
  }
}
