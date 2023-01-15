import { Component } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Validators, FormBuilder } from '@angular/forms';
import { TrainersService } from '../../../../services/trainers.service';
@Component({
  selector: 'app-news-management-read',
  templateUrl: './news-management-read.component.html',
  styleUrls: ['./news-management-read.component.css'],
})
export class NewsManagementReadComponent {
  allNews: any = [];
  voteStatus = 'novote';
  upVoteBtnClass = 'btn btn-outline-success';
  downVoteBtnClass = 'btn btn-outline-danger';

  constructor(
    private newsService: NewsService,
    public currrentUser: CurrentUserService,
    private formBuilder: FormBuilder,
    private trainersService: TrainersService
  ) {}

  newsInfo = this.formBuilder.group({
    title: ['', Validators.required],
    date: ['', Validators.required],
    content: ['', Validators.required],
    upVotes: [[''], Validators.required],
    downVotes: [[''], Validators.required],
  });

  ngOnInit(): void {
    this.getNews();
    this.refreshUserInfo();
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );

    console.log(
      'CURRENT USER TYPE IS: ' +
        this.currrentUser.userType +
        ' AND  USER ID IS: ' +
        this.currrentUser.userID +
        'AND USERNAME IS: ' +
        this.currrentUser.userName
    );
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

  public voteStatusBtn(news: any) {
    let upVotes: string[] = news.upVotes;
    let downVotes: string[] = news.downVotes;

    if (upVotes.length > 0) {
      if (upVotes.includes(this.currrentUser.userName)) {
        this.upVoteBtnClass = 'btn btn-success';
        this.voteStatus = 'liked';
        return 'liked';
      }
    } else if (downVotes.length > 0) {
      if (downVotes.includes(this.currrentUser.userName)) {
        this.downVoteBtnClass = 'btn btn-danger';
        this.voteStatus = 'disliked';
        return 'disliked';
      }
    }
    return 'novote';
  }

  public voteClassBtn(news: any) {
    let upVotes: string[] = news.upVotes;
    let downVotes: string[] = news.downVotes;
    //if (allAthletes.length > 0) {
    if (upVotes.includes(this.currrentUser.userName)) {
      this.upVoteBtnClass = 'btn btn-success';
      return true;
    } else {
      this.downVoteBtnClass = 'btn btn-danger';
      return false;
    }
    //}
    //return false;
  }

  vote(newsID: any, newsObject: any, action: any) {
    console.log('NEWS IS: ' + JSON.stringify(newsObject));
    console.log('ACTION IS: ' + action);
    // Updates class info...
    let newsUpVotes: any[] = newsObject.upVotes;
    let newsdownVotes: any[] = newsObject.downVotes;
    // If user likes...
    if (action == 'like') {
      // first checks it user already liked...
      if (newsUpVotes.includes(this.currrentUser.userName)) {
        let athleteIndex = newsUpVotes.lastIndexOf(this.currrentUser.userName);
        newsUpVotes.splice(athleteIndex, 1);
        //this.upVoteBtnClass = 'btn btn-outline-success';
        this.voteStatus = 'novote';
        //return 'btn btn-outline-success';
      } else {
        newsUpVotes.push(this.currrentUser.userName);
        //this.upVoteBtnClass = 'btn btn-success';
        this.voteStatus = 'liked';
        //return 'btn btn-success';
      }
    } else if (action == 'dislike') {
      // first checks it user already liked...
      if (newsdownVotes.includes(this.currrentUser.userName)) {
        let athleteIndex = this.downVoteBtnClass.lastIndexOf(
          this.currrentUser.userName
        );
        newsdownVotes.splice(athleteIndex, 1);
        //this.downVoteBtnClass = 'btn btn-outline-danger';
        this.voteStatus = 'novote';
        //return 'btn btn-outline-danger';
      } else {
        newsdownVotes.push(this.currrentUser.userName);
        //this.downVoteBtnClass = 'btn btn-danger';
        this.voteStatus = 'disliked';
        //return 'btn btn-danger';
      }
    }
    this.newsInfo.get('title')?.setValue(newsObject.title);
    this.newsInfo.get('date')?.setValue(newsObject.type);
    this.newsInfo.get('content')?.setValue(newsObject.coachId);
    this.newsInfo.get('upVotes')?.setValue(newsUpVotes);
    this.newsInfo.get('downVotes')?.setValue(newsdownVotes);

    // Service call to API.
    this.newsService.voteNews(newsID, this.newsInfo.value).subscribe({
      next: (response: any) => {
        console.log('VOTING IN NEWS');
        //this.allClasses = response;
        //console.log(this.allClasses);
      },
      error: (err) => {
        console.log('********** ERR **********');
        console.log(err);
      },
    });
    this.getNews();
    return '';
  }
}
