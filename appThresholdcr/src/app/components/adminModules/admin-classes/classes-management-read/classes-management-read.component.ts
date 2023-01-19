import { Component } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Validators, FormBuilder } from '@angular/forms';
import { TrainersService } from '../../../../services/trainers.service';
import { interval } from 'rxjs';

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

  private updateSubscription: any;

  constructor(
    private classService: ClassesService,
    public currrentUser: CurrentUserService,
    private formBuilder: FormBuilder,
    private trainersService: TrainersService
  ) {}

  classInfo = this.formBuilder.group({
    classTitle: ['', Validators.required],
    type: ['x', Validators.required],
    coachId: [0, Validators.required],
    classDate: ['', Validators.required],
    room: [0, Validators.required],
    athletes: [[''], Validators.required],
  });

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getClasses();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  private getClasses() {
    this.classService.readClasses().subscribe({
      next: (response: any) => {
        this.allClasses = response;
        //console.log(this.allClasses);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public enrollStatusBtn(classes: any) {
    let allAthletes: string[] = classes.athletes;

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
    this.classInfo.get('classTitle')?.setValue(classObject.classTitle);
    this.classInfo.get('type')?.setValue(classObject.type);
    this.classInfo.get('coachId')?.setValue(classObject.coachId);
    this.classInfo.get('classDate')?.setValue(classObject.classDate);
    this.classInfo.get('room')?.setValue(newRoom);
    this.classInfo.get('athletes')?.setValue(athletesArray);

    // Service call to API.
    this.classService.enrollClassTest(classID, this.classInfo.value).subscribe({
      next: (response: any) => {
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
      },
      error: (err) => {
        console.log(err);
      },
    });
    //return this.coach.name;
  }
}
