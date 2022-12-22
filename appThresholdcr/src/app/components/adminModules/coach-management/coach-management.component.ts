import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coach-management',
  templateUrl: './coach-management.component.html',
  styleUrls: ['./coach-management.component.css'],
})
export class CoachManagementComponent {
  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['/adminHome']);


  }
}
