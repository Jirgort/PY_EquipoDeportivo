import { Component } from '@angular/core';
import { EventsService } from '../../../../services/events.service';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-event-managment-read',
  templateUrl: './event-managment-read.component.html',
  styleUrls: ['./event-managment-read.component.css'],
})
export class EventManagmentReadComponent {
  events: any = [];
  allevents: any = [];
  enrollStatus = 'Participar';
  enrollBtnClass = 'btn btn-success';
  coach: any;
  constructor(
    private eventsService: EventsService,
    private formBuilder: FormBuilder,
    public currrentUser: CurrentUserService
  ) {}
  eventInfo = this.formBuilder.group({
    type: ['x', Validators.required],
    title: ['', Validators.required],
    sportClass: [0, Validators.required],
    content: ['', Validators.required],
    date: [0, Validators.required],
    maxMember: [0, Validators.required],
    athletes: [[''], Validators.required],
  });
  public enrollStatusBtn(event: any) {
    let allAthletes: string[] = event.athletes;
    if (allAthletes.length > 0) {
      if (allAthletes.includes(this.currrentUser.userName)) {
        this.enrollStatus = 'Abandonar';
        return true;
      } else {
        this.enrollStatus = 'Participar';
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
  enroll(eventID: any, eventObject: any, action: any) {
    // Updates class info...
    let athletesArray: any[] = eventObject.athletes;
    let newRoom = eventObject.room;
    if (action == 'Participar') {
      athletesArray.push(this.currrentUser.userName);
      newRoom -= 1;
    } else {
      let athleteIndex = athletesArray.lastIndexOf(this.currrentUser.userName);
      athletesArray.splice(athleteIndex, 1);
      newRoom += 1;
    }
    //let newRoom =
    //  action == 'Matricular' ? eventObject.room - 1 : eventObject.room + 1;
    //athletesArray.push(this.currrentUser.userName);
    this.eventInfo.get('type')?.setValue(eventObject.type);
    this.eventInfo.get('title')?.setValue(eventObject.title);
    this.eventInfo.get('sportClass')?.setValue(eventObject.sportClass);
    this.eventInfo.get('content')?.setValue(eventObject.content);
    this.eventInfo.get('date')?.setValue(eventObject.date);
    this.eventInfo.get('maxMember')?.setValue(eventObject.maxMember);
    this.eventInfo.get('athletes')?.setValue(athletesArray);

    // Service call to API.
    this.eventsService
      .enrollEventTest(eventID, this.eventInfo.value)
      .subscribe({
        next: (response: any) => {
          //this.allevents = response;
          //console.log(this.allevents);
        },
        error: (err) => {
          console.log(err);
        },
      });
    this.getEvents();
  }

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents() {
    this.eventsService.getEvents().subscribe({
      next: (response: any) => {
        this.events = response;
        //console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
