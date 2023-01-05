import { Component } from '@angular/core';
import { EventsService } from '../../../../services/events.service';
@Component({
  selector: 'app-event-type-management-delete',
  templateUrl: './event-type-management-delete.component.html',
  styleUrls: ['./event-type-management-delete.component.css']
})
export class EventTypeManagementDeleteComponent {
  events: any = ['hola', 'hello', 'jirgort'];

  constructor(private eventsService: EventsService) {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEventsType().subscribe({
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

  deleteEventType(event: any) {
    this.eventsService.deleteEventType(event._id).subscribe({
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
