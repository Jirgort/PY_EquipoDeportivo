import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { EventsService } from '../../../../services/events.service';
import { SportService } from '../../../../services/sport.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-managment-create',
  templateUrl: './event-managment-create.component.html',
  styleUrls: ['./event-managment-create.component.css'],
})
export class EventManagmentCreateComponent {
  events: any = ['a', 'b', 'c', 'd', 'e'];
  sports: any = ['a'];
  constructor(
    public datepipe: DatePipe,
    private router: Router,
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private sportService: SportService
  ) {}
  registerForm = this.formBuilder.group({
    type: ['', Validators.required],
    title: ['', Validators.required],
    sportClass: ['', Validators.required],
    content: ['', Validators.required],
    date: ['', Validators.required],
    maxMember: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getSports();
    this.getEventTypes();
  }

  submit() {
    this.newEvent(this.registerForm.value);
    //this.router.navigate(['/adminHome']);
  }

  newEvent(event: any): void {
    /*let currentDateTime = this.datepipe.transform(
        new Date(),
        'MM/dd/yyyy h:mm:ss'
      );
  
      this.registerForm.get('date')?.setValue(currentDateTime);
      
      this.eventsService.newEvent(event).subscribe(
        (res) => {
          localStorage.setItem('token', res.token);
        },
        (err) => {
          console.log(err);
        }
      );*/
  }
  getEventTypes() {
    this.eventsService.getEventsType().subscribe({
      next: (response: any) => {
        this.events = response;
        //console.log(this.coaches);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getSports() {
    this.sportService.getSports().subscribe({
      next: (response: any) => {
        console.log('holaaaaaaaaaaaaaaaa');
        this.sports = response;
        //console.log(this.coaches);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  createEvent(sport: any, eventType: any, date: any) {
    //let coachData = JSON.stringify(coach.value);
    console.log('COACH ASSIGNED TO CLASS:' + sport.value);
    console.log('CLASS TYPE ASSIGNED TO CLASS:' + eventType.value);

    //this.registerForm.patchValue({ coachId: coach._id });

    this.registerForm.get('type')?.setValue(eventType.value);
    this.registerForm.get('sportClass')?.setValue(sport.value);

    this.eventsService.newEvent(this.registerForm.value).subscribe(
      (res) => {
        console.log(this.registerForm);
        localStorage.setItem('token', res.token);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
