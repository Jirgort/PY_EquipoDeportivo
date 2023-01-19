import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { EventsService } from '../../../../services/events.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-event-type-management-create',
  templateUrl: './event-type-management-create.component.html',
  styleUrls: ['./event-type-management-create.component.css'],
})
export class EventTypeManagementCreateComponent {
  message: MatSnackBar;
  constructor(
    public datepipe: DatePipe,
    private router: Router,
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private messageSnackBar: MatSnackBar

  ) {
    this.message = messageSnackBar;
  }
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
        this.messageSnackBar.open('Tipo de evento creado satisfactoriamente.', 'OK!', {
          duration: 3000,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
