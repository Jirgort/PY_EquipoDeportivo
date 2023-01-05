import { Component } from '@angular/core';

@Component({
  selector: 'app-event-sidenav-operations',
  templateUrl: './event-sidenav-operations.component.html',
  styleUrls: ['./event-sidenav-operations.component.css']
})
export class EventSidenavOperationsComponent {
  currentOperation: string;
  constructor() {
    this.currentOperation = '';
  }

  changeOperation(operation: string) {
    this.currentOperation = operation;
    console.log(this.currentOperation);
  }
}
