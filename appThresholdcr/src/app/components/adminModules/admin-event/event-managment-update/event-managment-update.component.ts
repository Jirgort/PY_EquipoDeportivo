import { Component } from '@angular/core';
import { EventsService } from '../../../../services/events.service';
import { SportService } from '../../../../services/sport.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-managment-update',
  templateUrl: './event-managment-update.component.html',
  styleUrls: ['./event-managment-update.component.css'],
})
export class EventManagmentUpdateComponent {
  events: any = ['hola', 'hello', 'jirgort'];
  sports: any = ['a'];
  closeResult = '';
  eventToUpdate: any = ['event'];
  private updateSubscription: any;
  message: MatSnackBar;

  constructor(
    private formBuilder: FormBuilder,
    private eventsServices: EventsService,
    private modalService: NgbModal,
    public currrentUser: CurrentUserService,
    private messageSnackBar: MatSnackBar,
    private sportService: SportService,
  ) {
    this.message = messageSnackBar;
  }

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
    this.getSports();
    this.getEventTypes();
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

  updateForm = this.formBuilder.group({
    eventType: ['', Validators.required],
    eventTitle: ['', Validators.required],
    sportClass: ['', Validators.required],
    eventContent: ['', Validators.required],
    eventDate: ['', Validators.required],
  });

  getEvents() {
    this.eventsServices.getEvents().subscribe({
      next: (response: any) => {
        this.events = response;
        //console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateEvent() {
    let testForm = JSON.stringify(this.updateForm.value);
    this.eventsServices
      .updateEvent(this.eventToUpdate._id, this.updateForm.value)
      .subscribe({
        next: (response: any) => {
          //this.events = response;
          //console.log(this.events);
          this.messageSnackBar.open(
            'Evento modificado satisfactoriamente.',
            'OK!',
            {
              duration: 3000,
            }
          );
        },
        error: (err) => {
          console.log(err);
        },
      });
    this.getEvents();
  }

  

  getEventTypes() {
    this.eventsServices.getEventsType().subscribe({
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
        this.sports = response;
        //console.log(this.coaches);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
      
  open(content: any, event: any) {
    this.eventToUpdate = event;
    this.autoFillForm(event);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private autoFillForm(event: any) {
    // Autofills the form with the coach to update.
    this.updateForm.setValue({
      eventType: event.eventType,
      eventTitle: event.eventTitle,
      sportClass: event.sportClass,
      eventContent: event.eventContent,
      eventDate: event.eventDate,
    });
  }
}
