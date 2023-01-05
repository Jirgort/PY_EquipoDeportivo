import { Component } from '@angular/core';
import { EventsService } from '../../../../services/events.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-managment-update',
  templateUrl: './event-managment-update.component.html',
  styleUrls: ['./event-managment-update.component.css']
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
      type: ['', Validators.required],
      title: ['', Validators.required],
      sportClass: ['', Validators.required],
      content: ['', Validators.required],
      date: ['', Validators.required],
      maxMember: ['', Validators.required],
    });

    ngOnInit(): void {
      this.getFuncionarios();
    }

    getFuncionarios() {
      this.eventsServices.getEvents().subscribe({
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

    test(name: string) {
      console.log('BUTTON WAS CLICKED FOR: ' + name);
    }

    updateEvent() {
      console.log('BUTTON WAS CLICKED FOR: ' + this.eventToUpdate._id);
      let testForm = JSON.stringify(this.updateForm.value);
      console.log('THE DATA TO PASS IS: ' + this.updateForm.value);
      this.eventsServices
        .updateEvent(this.eventToUpdate._id, this.updateForm.value)
        .subscribe({
          next: (response: any) => {
            console.log('********** EVENT UPDATED **********');
            this.events = response;
            console.log(this.events);
          },
          error: (err) => {
            console.log('********** ERR: TRAINER NOT UPDATED **********');
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
        type: event.type,
        title: event.title,
        sportClass: event.sportClass,
        content: event.content,
        date: null,
        maxMember: event.maxMember,
      });
    }
}
