import { Component } from '@angular/core';

@Component({
  selector: 'app-sport-sidenav-operations',
  templateUrl: './sport-sidenav-operations.component.html',
  styleUrls: ['./sport-sidenav-operations.component.css']
})
export class SportSidenavOperationsComponent {
  
  currentOperation: string;
  constructor() {
    this.currentOperation = '';
  }

  changeOperation(operation: string) {
    this.currentOperation = operation;
    console.log(this.currentOperation);
  }
}
