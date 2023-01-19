import { Component } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { interval } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-news-management-delete',
  templateUrl: './news-management-delete.component.html',
  styleUrls: ['./news-management-delete.component.css'],
})
export class NewsManagementDeleteComponent {
  allNews: any = ['1', '2', '3'];
  private updateSubscription: any;

  constructor(
    private newsService: NewsService,
    public currrentUser: CurrentUserService
  ) {}

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getNews();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
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
