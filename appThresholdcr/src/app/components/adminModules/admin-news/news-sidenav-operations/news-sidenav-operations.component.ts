import { Component } from '@angular/core';

@Component({
  selector: 'app-news-sidenav-operations',
  templateUrl: './news-sidenav-operations.component.html',
  styleUrls: ['./news-sidenav-operations.component.css'],
})
export class NewsSidenavOperationsComponent {
  currentOperation: string;
  constructor() {
    this.currentOperation = '';
  }

  changeOperation(operation: string) {
    this.currentOperation = operation;
    console.log(this.currentOperation);
  }
}
