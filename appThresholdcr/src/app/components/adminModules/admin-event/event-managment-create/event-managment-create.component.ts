import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import {EventsService} from '../../../../services/events.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-managment-create',
  templateUrl: './event-managment-create.component.html',
  styleUrls: ['./event-managment-create.component.css']
})
export class EventManagmentCreateComponent {

    constructor(public datepipe: DatePipe, private router: Router,private formBuilder: FormBuilder,private eventsService: EventsService) {}
    registerForm=this.formBuilder.group({
      type: ['', Validators.required],
      title: ['', Validators.required],
      sportClass: ['', Validators.required],
      content: ['', Validators.required],
      date: ['',Validators.required],
      maxMember: ['',Validators.required],
    })

    

    submit() {
      this.newEvent(this.registerForm.value);
      this.router.navigate(['/adminHome']);
    }

    newEvent(event: any): void {
      let currentDateTime = this.datepipe.transform(
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
      );
    }
}
