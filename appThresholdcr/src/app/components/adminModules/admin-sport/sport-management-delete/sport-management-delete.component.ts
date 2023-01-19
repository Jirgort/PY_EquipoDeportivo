import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SportService } from '../../../../services/sport.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sport-management-delete',
  templateUrl: './sport-management-delete.component.html',
  styleUrls: ['./sport-management-delete.component.css'],
})
export class SportManagementDeleteComponent {
  sports: any = ['hola', 'hello', 'jirgort'];
  private updateSubscription: any;

  constructor(
    private sportService: SportService,
    public currrentUser: CurrentUserService
  ) {
    this.getSport();
  }

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getSport();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  getSport() {
    this.sportService.getSports().subscribe({
      next: (response: any) => {
        this.sports = response;
        //console.log(this.sports);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteSport(sport: any) {
    this.sportService.deleteSport(sport._id).subscribe({
      next: (response: any) => {
        this.sports = response;
        //console.log(this.sports);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getSport();
  }
}
