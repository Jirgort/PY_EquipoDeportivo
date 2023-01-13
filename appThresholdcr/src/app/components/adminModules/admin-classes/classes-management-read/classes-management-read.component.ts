import { Component } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-classes-management-read',
  templateUrl: './classes-management-read.component.html',
  styleUrls: ['./classes-management-read.component.css'],
})
export class ClassesManagementReadComponent {
  allClasses: any = ['1', '2', '3'];
  enrollStatus = 'Matricular';
  enrollBtnClass = 'btn btn-success';

  constructor(
    private classService: ClassesService,
    public currrentUser: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.getNews();
    console.log(
      'CURRENT USER TYPE IS: ' +
        this.currrentUser.userType +
        ' AND  USER ID IS: ' +
        this.currrentUser.userID
    );
  }

  private getNews() {
    this.classService.readClasses().subscribe({
      next: (response: any) => {
        console.log('GETTIN CLASSES');
        this.allClasses = response;
        console.log(this.allClasses);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  enroll(classID: any) {
    console.log('CLASS ID IS: ' + classID);
    if (this.enrollStatus == 'Matricular') {
      this.enrollStatus = 'Desmatricular';
      this.enrollBtnClass = 'btn btn-danger';
    } else {
      this.enrollStatus = 'Matricular';
      this.enrollBtnClass = 'btn btn-success';
    }
  }
}
