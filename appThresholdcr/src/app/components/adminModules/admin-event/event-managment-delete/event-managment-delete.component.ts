import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../../services/events.service';

@Component({
  selector: 'app-event-managment-delete',
  templateUrl: './event-managment-delete.component.html',
  styleUrls: ['./event-managment-delete.component.css'],
})
export class EventManagmentDeleteComponent {
  events: any = ['hola', 'hello', 'jirgort'];

  constructor(private eventsService: EventsService) {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe({
      next: (response: any) => {
        console.log('holaaaaaaaaaaaaaaaa');
        this.events = response;
        console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteEvent(event: any) {
    this.eventsService.deleteEvent(event._id).subscribe({
      next: (response: any) => {
        console.log('********** TRAINER DELETED **********');
        this.events = response;
        console.log(this.events);
      },
      error: (err) => {
        console.log('********** ERR: TRAINER NOT DELETED **********');
        console.log(err);
      },
    });
  }
}
