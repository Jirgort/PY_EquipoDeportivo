import { Component } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Validators, FormBuilder } from '@angular/forms';
import { TrainersService } from '../../../../services/trainers.service';
import { Observable, Subscription, interval } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDividerModule } from '@angular/material/divider';

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
  closeResult = '';

  private updateSubscription: any;
  constructor(
    private newsService: NewsService,
    public currrentUser: CurrentUserService,
    private formBuilder: FormBuilder,
    private trainersService: TrainersService,
    private modalService: NgbModal
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
    /*
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getNews();
    });
    */
    this.refreshUserInfo();
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

  public voteStatusBtn(news: any) {
    let upVotes: string[] = news.upVotes;
    let downVotes: string[] = news.downVotes;

    if (upVotes.length > 0) {
      if (upVotes.includes(this.currrentUser.userName)) {
        return 'liked';
      }
    }
    if (downVotes.length > 0) {
      if (downVotes.includes(this.currrentUser.userName)) {
        return 'disliked';
      }
    }
    return 'novote';
  }

  async vote(newsID: any, newsObject: any, action: any) {
    // Updates class info...
    let newsUpVotes: any[] = newsObject.upVotes;
    let newsDownVotes: any[] = newsObject.downVotes;
    // If user likes...
    if (action == 'like') {
      // first checks it user already liked...
      if (newsUpVotes.includes(this.currrentUser.userName)) {
        //console.log('CANCELLING LIKE VOTE');
        let athleteIndex = newsUpVotes.lastIndexOf(this.currrentUser.userName);
        newsUpVotes.splice(athleteIndex, 1);
      } else {
        //console.log('NEW LIKE VOTE');
        // If the user already disliked the news, we remove it.
        if (newsDownVotes.includes(this.currrentUser.userName)) {
          let athleteIndex = newsDownVotes.lastIndexOf(
            this.currrentUser.userName
          );
          newsDownVotes.splice(athleteIndex, 1);
        }
        // and then add the vote to upvotes.
        newsUpVotes.push(this.currrentUser.userName);
      }
    } else if (action == 'dislike') {
      // first checks it user already disliked...
      if (newsDownVotes.includes(this.currrentUser.userName)) {
        //console.log('CANCELLING DISLIKE VOTE');
        let athleteIndex = newsDownVotes.lastIndexOf(
          this.currrentUser.userName
        );
        newsDownVotes.splice(athleteIndex, 1);
      } else {
        // if the user already liked the news, we remove it.
        if (newsUpVotes.includes(this.currrentUser.userName)) {
          let athleteIndex = newsUpVotes.lastIndexOf(
            this.currrentUser.userName
          );
          newsUpVotes.splice(athleteIndex, 1);
        }
        // and then add the vote to downvotes.
        newsDownVotes.push(this.currrentUser.userName);
        //this.downVoteBtnClass = 'btn btn-danger';
        this.voteStatus = 'disliked';
        //return 'btn btn-danger';
      }
    }
    this.newsInfo.get('title')?.setValue(newsObject.title);
    this.newsInfo.get('date')?.setValue(newsObject.type);
    this.newsInfo.get('content')?.setValue(newsObject.coachId);
    this.newsInfo.get('upVotes')?.setValue(newsUpVotes);
    this.newsInfo.get('downVotes')?.setValue(newsDownVotes);

    // Service call to API.
    this.newsService.voteNews(newsID, this.newsInfo.value).subscribe({
      next: (response: any) => {
        //this.allClasses = response;
        //console.log(this.allClasses);
      },
      error: (err) => {
        console.log(err);
      },
    });
    await this.getNews();
    return '';
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
