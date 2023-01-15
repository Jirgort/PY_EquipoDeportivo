import { Component } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  constructor(public currentUser: CurrentUserService) {}

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
