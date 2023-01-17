import { Component } from '@angular/core';
import { AthleteService } from '../../../../services/athlete.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-athlete-managment-update',
  templateUrl: './athlete-managment-update.component.html',
  styleUrls: ['./athlete-managment-update.component.css'],
})
export class AthleteManagmentUpdateComponent {
  athletes: any = ['hola', 'hello', 'jirgort'];
  closeResult = '';
  athleteToUpdate: any = ['athlete'];

  constructor(
    private formBuilder: FormBuilder,
    private athleteService: AthleteService,
    private modalService: NgbModal
  ) {}

  updateForm = this.formBuilder.group({
    athleteName: ['', Validators.required],
    athleteUserName: ['', Validators.required],
    athletePassword: ['', Validators.required],
    athleteBirth: [Validators.required],
    athleteWeight: [Validators.required],
    athleteHeight: ['', Validators.nullValidator],
  });

  ngOnInit(): void {
    this.getAthletes();
  }

  getAthletes() {
    this.athleteService.getAthletes().subscribe({
      next: (response: any) => {
        this.athletes = response;
        //console.log(this.athletes);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateAthlete() {
    let testForm = JSON.stringify(this.updateForm.value);
    this.athleteService
      .updateAthlete(this.athleteToUpdate._id, this.updateForm.value)
      .subscribe({
        next: (response: any) => {
          //this.athletes = response;
          //console.log(this.athletes);
        },
        error: (err) => {
          console.log(err);
        },
      });
    this.getAthletes();
  }

  open(content: any, athlete: any) {
    this.athleteToUpdate = athlete;
    this.autoFillForm(athlete);
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

  private autoFillForm(athlete: any) {
    // Autofills the form with the coach to update.
    this.updateForm.setValue({
      athleteName: athlete.athleteName,
      athleteUserName: athlete.athleteUserName,
      athletePassword: athlete.athletePassword,
      athleteBirth: athlete.athleteBirth,
      athleteWeight: athlete.athleteWeight,
      athleteHeight: athlete.athleteHeight,
    });
  }
}
