import { Component } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Validators, FormBuilder } from '@angular/forms';
import { TrainersService } from '../../../../services/trainers.service';

@Component({
  selector: 'app-classes-management-read',
  templateUrl: './classes-management-read.component.html',
  styleUrls: ['./classes-management-read.component.css'],
})
export class ClassesManagementReadComponent {
  allClasses: any = [];
  enrollStatus = 'Matricular';
  enrollBtnClass = 'btn btn-success';
  coach: any;

  constructor(
    private classService: ClassesService,
    public currrentUser: CurrentUserService,
    private formBuilder: FormBuilder,
    private trainersService: TrainersService
  ) {}

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
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );

    console.log(
      'CURRENT USER TYPE IS: ' +
        this.currrentUser.userType +
        ' AND  USER ID IS: ' +
        this.currrentUser.userID +
        'AND USERNAME IS: ' +
        this.currrentUser.userName
    );
  }

  private getClasses() {
    this.classService.readClasses().subscribe({
      next: (response: any) => {
        console.log('GETTIN CLASSES');
        this.allClasses = response;
        //console.log(this.allClasses);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public enrollStatusBtn(classes: any) {
    //console.log('CLASS IS: ' + JSON.stringify(classes));
    //console.log('ATHLETES IS: ' + classes.athletes);
    let allAthletes: string[] = classes.athletes;
    //console.log('ARRAY LEN IS: ' + allAthletes.length);

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

  enroll(classID: any, classObject: any, action: any) {
    console.log('CLASS IS: ' + JSON.stringify(classObject));
    console.log('ACTIOS IS: ' + action);
    // Updates class info...
    let athletesArray: any[] = classObject.athletes;
    let newRoom = classObject.room;
    if (action == 'Matricular') {
      athletesArray.push(this.currrentUser.userName);
      newRoom -= 1;
    } else {
      let athleteIndex = athletesArray.lastIndexOf(this.currrentUser.userName);
      athletesArray.splice(athleteIndex, 1);
      newRoom += 1;
    }
    //let newRoom =
    //  action == 'Matricular' ? classObject.room - 1 : classObject.room + 1;
    //athletesArray.push(this.currrentUser.userName);
    this.classInfo.get('title')?.setValue(classObject.title);
    this.classInfo.get('type')?.setValue(classObject.type);
    this.classInfo.get('coachId')?.setValue(classObject.coachId);
    this.classInfo.get('date')?.setValue(classObject.date);
    this.classInfo.get('room')?.setValue(newRoom);
    this.classInfo.get('athletes')?.setValue(athletesArray);

    // Service call to API.
    this.classService.enrollClassTest(classID, this.classInfo.value).subscribe({
      next: (response: any) => {
        console.log('ENROLLING TO CLASS');
        //this.allClasses = response;
        //console.log(this.allClasses);
      },
      error: (err) => {
        console.log('********** ERR **********');
        console.log(err);
      },
    });
    this.getClasses();
  }

  getCoachByID(id: any) {
    this.trainersService.getTrainer(id).subscribe({
      next: (response: any) => {
        this.coach = response;
        console.log('COACH GOTTEN BY ID: ' + this.coach.name);
      },
      error: (err) => {
        console.log(err);
      },
    });
    //return this.coach.name;
  }
}
