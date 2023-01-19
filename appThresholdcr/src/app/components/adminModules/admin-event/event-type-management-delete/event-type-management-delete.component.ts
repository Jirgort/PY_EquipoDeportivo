import { Component } from '@angular/core';
import { EventsService } from '../../../../services/events.service';
import { interval } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-event-type-management-delete',
  templateUrl: './event-type-management-delete.component.html',
  styleUrls: ['./event-type-management-delete.component.css'],
})
export class EventTypeManagementDeleteComponent {
  events: any = ['hola', 'hello', 'jirgort'];
  private updateSubscription: any;

  constructor(
    private eventsService: EventsService,
    public currrentUser: CurrentUserService
  ) {
    this.getEventTypes();
  }

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getEventTypes();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  getEventTypes() {
    this.eventsService.getEventsType().subscribe({
      next: (response: any) => {
        this.events = response;
        //console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteEventType(event: any) {
    this.eventsService.deleteEventType(event._id).subscribe({
      next: (response: any) => {
        //this.events = response;
        //console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getEventTypes();
  }
}
