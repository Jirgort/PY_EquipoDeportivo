import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent {
  private updateSubscription: any;

  constructor() {}

  ngOnInit() {
    /*
    this.updateSubscription = interval(1000).subscribe((val) => {
      //this.getClasses();
      console.log('*************** UPDATING ***************');
    });
    */
  }
}
