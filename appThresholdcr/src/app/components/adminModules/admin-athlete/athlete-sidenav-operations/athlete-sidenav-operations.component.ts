import { Component } from '@angular/core';

@Component({
  selector: 'app-athlete-sidenav-operations',
  templateUrl: './athlete-sidenav-operations.component.html',
  styleUrls: ['./athlete-sidenav-operations.component.css']
})

export class AthleteSidenavOperationsComponent {
  currentOperation: string;
  constructor() {
    this.currentOperation = '';
  }

  changeOperation(operation: string) {
    this.currentOperation = operation;
    console.log(this.currentOperation);
  }
}