import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { EventsService } from '../../../../services/events.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-event-type-management-create',
  templateUrl: './event-type-management-create.component.html',
  styleUrls: ['./event-type-management-create.component.css'],
})
export class EventTypeManagementCreateComponent {
  constructor(
    public datepipe: DatePipe,
    private router: Router,
    private formBuilder: FormBuilder,
    private eventsService: EventsService
  ) {}
  registerForm = this.formBuilder.group({
    eventType: ['', Validators.required],
  });

  submit() {
    this.newEventType(this.registerForm.value);
  }

  newEventType(event: any): void {
    this.eventsService.newEventType(event).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
