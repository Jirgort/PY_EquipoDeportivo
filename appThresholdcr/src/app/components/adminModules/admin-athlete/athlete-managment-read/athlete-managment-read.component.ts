import { Component } from '@angular/core';
import { AthleteService } from '../../../../services/athlete.service';
import { interval } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-athlete-managment-read',
  templateUrl: './athlete-managment-read.component.html',
  styleUrls: ['./athlete-managment-read.component.css'],
})
export class AthleteManagmentReadComponent {
  athletes: any = ['hola', 'hello', 'jirgort'];
  private updateSubscription: any;

  constructor(
    private athleteservice: AthleteService,
    public currrentUser: CurrentUserService
  ) {}

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getAthletes();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  getAthletes() {
    this.athleteservice.getAthletes().subscribe({
      next: (response: any) => {
        this.athletes = response;
        //console.log(this.athletes);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
