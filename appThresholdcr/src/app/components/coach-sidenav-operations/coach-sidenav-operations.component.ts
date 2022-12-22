import { Component } from '@angular/core';

@Component({
  selector: 'app-coach-sidenav-operations',
  templateUrl: './coach-sidenav-operations.component.html',
  styleUrls: ['./coach-sidenav-operations.component.css'],
})
export class CoachSidenavOperationsComponent {
  currentOperation: string;
  constructor() {
    this.currentOperation = '';
  }

  changeOperation(operation: string) {
    this.currentOperation = operation;
    console.log(this.currentOperation);
  }
}
