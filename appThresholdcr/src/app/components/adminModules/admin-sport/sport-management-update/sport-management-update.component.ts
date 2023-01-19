import { Component } from '@angular/core';
import { SportService } from '../../../../services/sport.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sport-management-update',
  templateUrl: './sport-management-update.component.html',
  styleUrls: ['./sport-management-update.component.css'],
})
export class SportManagementUpdateComponent {
  sports: any = ['hola', 'hello', 'jirgort'];
  closeResult = '';
  sportToUpdate: any = ['trainer'];
  message: MatSnackBar;

  constructor(
    private formBuilder: FormBuilder,
    private sportService: SportService,
    private modalService: NgbModal,
    private messageSnackBar: MatSnackBar
  ) {
    this.message = messageSnackBar;
  }

  updateForm = this.formBuilder.group({
    sportName: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getSports();
  }

  getSports() {
    this.sportService.getSports().subscribe({
      next: (response: any) => {
        this.sports = response;
        //console.log(this.sports);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateSport() {
    this.sportService
      .updateSport(this.sportToUpdate._id, this.updateForm.value)
      .subscribe({
        next: (response: any) => {
          //this.sports = response;
          //console.log(this.sports);
          this.messageSnackBar.open('Deporte modificado satisfactoriamente.', 'OK!', {
            duration: 3000,
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
    this.getSports();
  }

  open(content: any, sport: any) {
    this.sportToUpdate = sport;
    this.autoFillForm(sport);
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

  private autoFillForm(sport: any) {
    // Autofills the form with the coach to update.
    this.updateForm.setValue({
      sportName: sport.sportName,
    });
  }
}
