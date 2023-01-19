import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../../services/events.service';
import { interval } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-event-managment-delete',
  templateUrl: './event-managment-delete.component.html',
  styleUrls: ['./event-managment-delete.component.css'],
})
export class EventManagmentDeleteComponent {
  events: any = ['hola', 'hello', 'jirgort'];
  private updateSubscription: any;

  constructor(
    private eventsService: EventsService,
    public currrentUser: CurrentUserService
  ) {
    this.getEvents();
  }

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getEvents();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
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

  deleteEvent(event: any) {
    this.eventsService.deleteEvent(event._id).subscribe({
      next: (response: any) => {
        //this.events = response;
        //console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
