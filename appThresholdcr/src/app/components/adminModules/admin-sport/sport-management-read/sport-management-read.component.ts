import { Component } from '@angular/core';
import { SportService } from '../../../../services/sport.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sport-management-read',
  templateUrl: './sport-management-read.component.html',
  styleUrls: ['./sport-management-read.component.css'],
})
export class SportManagementReadComponent {
  Sports: any = ['hola', 'hello', 'jirgort'];
  private updateSubscription: any;

  constructor(
    private sportservice: SportService,
    public currrentUser: CurrentUserService
  ) {}

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getSports();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  getSports() {
    this.sportservice.getSports().subscribe({
      next: (response: any) => {
        this.Sports = response;
        //console.log(this.Sports);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
