import { Component } from '@angular/core';

@Component({
  selector: 'app-classes-sidenav-operations',
  templateUrl: './classes-sidenav-operations.component.html',
  styleUrls: ['./classes-sidenav-operations.component.css'],
})
export class ClassesSidenavOperationsComponent {
  currentOperation: string;
  constructor() {
    this.currentOperation = '';
  }

  changeOperation(operation: string) {
    this.currentOperation = operation;
    console.log(this.currentOperation);
  }
}
