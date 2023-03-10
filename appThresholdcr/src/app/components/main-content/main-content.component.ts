import { Component } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  constructor(public currentUser: CurrentUserService) {}

  ngOnInit() {
    this.refreshUserInfo();
  }

  refreshUserInfo() {
    this.currentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
