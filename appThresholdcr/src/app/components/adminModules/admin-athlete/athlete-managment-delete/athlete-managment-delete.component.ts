import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AthleteService } from '../../../../services/athlete.service';
import { interval } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-athlete-managment-delete',
  templateUrl: './athlete-managment-delete.component.html',
  styleUrls: ['./athlete-managment-delete.component.css'],
})
export class AthleteManagmentDeleteComponent {
  athletes: any = ['hola', 'dan', 'marc'];
  private updateSubscription: any;

  constructor(
    private athleteService: AthleteService,
    public currrentUser: CurrentUserService
  ) {
    this.getDeportistas();
  }

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getDeportistas();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  getDeportistas() {
    this.athleteService.getAthletes().subscribe({
      next: (response: any) => {
        this.athletes = response;
        //console.log(this.athletes);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteAthletes(depor: any) {
    this.athleteService.deleteAthlete(depor._id).subscribe({
      next: (response: any) => {
        //this.athletes = response;
        //console.log(this.athletes);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getDeportistas();
  }
}
