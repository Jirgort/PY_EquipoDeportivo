import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {EventsService} from '../../../../services/events.service';

@Component({
  selector: 'app-event-managment-read',
  templateUrl: './event-managment-read.component.html',
  styleUrls: ['./event-managment-read.component.css']
})
export class EventManagmentReadComponent {
      events:any = ["hola","hello","jirgort"];
      constructor(private eventsService:EventsService){
        
      }
      ngOnInit(): void {
        this.getFuncionarios();
      
      }
      getFuncionarios() {
        this.eventsService.getEvents()
          .subscribe(
            {
              next: (response: any) => {
                console.log("holaaaaaaaaaaaaaaaa" );
                this.events = response;
                console.log(this.events );
              },
              error: (err) => {
                console.log(err);
              }
            }
          );
      }
}
