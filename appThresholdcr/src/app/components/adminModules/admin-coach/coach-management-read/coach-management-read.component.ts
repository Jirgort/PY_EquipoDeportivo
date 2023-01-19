import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainersService } from '../../../../services/trainers.service';
import { interval } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-coach-management-read',
  templateUrl: './coach-management-read.component.html',
  styleUrls: ['./coach-management-read.component.css'],
})
export class CoachManagementReadComponent {
  trainers: any = ['hola', 'hello', 'jirgort'];
  private updateSubscription: any;

  constructor(
    private trainersService: TrainersService,
    public currrentUser: CurrentUserService
  ) {}

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getCoaches();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  getCoaches() {
    this.trainersService.getTrainers().subscribe({
      next: (response: any) => {
        this.trainers = response;
        //console.log(this.trainers);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
