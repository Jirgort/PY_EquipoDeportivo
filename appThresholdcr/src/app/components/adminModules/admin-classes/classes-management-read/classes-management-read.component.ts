import { Component } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-classes-management-read',
  templateUrl: './classes-management-read.component.html',
  styleUrls: ['./classes-management-read.component.css'],
})
export class ClassesManagementReadComponent {
  allClasses: any = [];
  enrollStatus = 'Matricular';
  enrollBtnClass = 'btn btn-success';

  constructor(
    private classService: ClassesService,
    public currrentUser: CurrentUserService,
    private formBuilder: FormBuilder
  ) {
    this.getClasses();
  }

  classInfo = this.formBuilder.group({
    title: ['', Validators.required],
    type: ['x', Validators.required],
    coachId: [0, Validators.required],
    date: ['', Validators.required],
    room: [0, Validators.required],
    athletes: [[''], Validators.required],
  });

  ngOnInit(): void {
    this.getClasses();
    console.log(
      'CURRENT USER TYPE IS: ' +
        this.currrentUser.userType +
        ' AND  USER ID IS: ' +
        this.currrentUser.userID
    );
  }

  private getClasses() {
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

  public enrollStatusBtn(classes: any) {
    console.log('CLASS IS: ' + JSON.stringify(classes));
    console.log('ATHLETES IS: ' + classes.athletes);
    let allAthletes: string[] = classes.athletes;
    console.log('ARRAY LEN IS: ' + allAthletes.length);

    if (allAthletes.length > 0) {
      if (allAthletes.includes(this.currrentUser.userName)) {
        this.enrollStatus = 'Desmatricular';
        return true;
      } else {
        this.enrollStatus = 'Matricular';
        return false;
      }
    }
    return false;
  }

  public enrollClassBtn(classes: any) {
    let allAthletes: string[] = classes.athletes;
    if (allAthletes.length > 0) {
      if (allAthletes.includes(this.currrentUser.userName)) {
        this.enrollBtnClass = 'btn btn-danger';
        return true;
      } else {
        this.enrollBtnClass = 'btn btn-success';
        return false;
      }
    }
    return false;
  }

  enroll(classID: any, test: any) {
    console.log('CLASS IS: ' + JSON.stringify(test));
    // Updates class info...
    let athletesArray: any[] = test.athletes;
    athletesArray.push(this.currrentUser.userName);
    this.classInfo.get('title')?.setValue(test.title);
    this.classInfo.get('type')?.setValue(test.type);
    this.classInfo.get('coachId')?.setValue(test.coachId);
    this.classInfo.get('date')?.setValue(test.date);
    this.classInfo.get('room')?.setValue(test.room - 1);
    this.classInfo.get('athletes')?.setValue(athletesArray);

    // Service call to API.
    this.classService.enrollClassTest(classID, this.classInfo.value).subscribe({
      next: (response: any) => {
        console.log('ENROLLING TO CLASS');
        this.allClasses = response;
        console.log(this.allClasses);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
