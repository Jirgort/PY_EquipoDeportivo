import { Component } from '@angular/core';
import { EventsService } from '../../../../services/events.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-managment-update',
  templateUrl: './event-managment-update.component.html',
  styleUrls: ['./event-managment-update.component.css'],
})
export class EventManagmentUpdateComponent {
  events: any = ['hola', 'hello', 'jirgort'];
  closeResult = '';
  eventToUpdate: any = ['event'];

  constructor(
    private formBuilder: FormBuilder,
    private eventsServices: EventsService,
    private modalService: NgbModal
  ) {}

  updateForm = this.formBuilder.group({
    eventType: ['', Validators.required],
    eventTitle: ['', Validators.required],
    sportClass: ['', Validators.required],
    eventContent: ['', Validators.required],
    eventDate: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getEvents();
  }

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
        },
        error: (err) => {
          console.log(err);
        },
      });
    this.getEvents();
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
