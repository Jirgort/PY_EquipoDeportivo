import { Component } from '@angular/core';

@Component({
  selector: 'app-coach-management',
  templateUrl: './coach-management.component.html',
  styleUrls: ['./coach-management.component.css'],
})
export class CoachManagementComponent {
  constructor() {}

  empList = [0, 'Chris', 'amchrisag@gmail.com', 5000];
}
