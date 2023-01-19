import { Component } from '@angular/core';
import { TrainersService } from '../../../../services/trainers.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-coach-management-edit',
  templateUrl: './coach-management-edit.component.html',
  styleUrls: ['./coach-management-edit.component.css'],
})
export class CoachManagementEditComponent {
  trainers: any = ['hola', 'hello', 'jirgort'];
  closeResult = '';
  trainerToUpdate: any = ['trainer'];
  private updateSubscription: any;

  constructor(
    private formBuilder: FormBuilder,
    private trainersService: TrainersService,
    private modalService: NgbModal,
    public currrentUser: CurrentUserService
  ) {
    this.getCoaches();
  }

  updateForm = this.formBuilder.group({
    coachName: ['', Validators.required],
    coachUserName: ['', Validators.required],
    coachPassword: ['', Validators.required],
    coachBirth: ['', Validators.required],
    coachWeight: ['', Validators.required],
    coachHeight: ['', Validators.required],
  });

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getCoaches();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  getCoaches() {
    this.trainersService.getTrainers().subscribe({
      next: (response: any) => {
        this.trainers = response;
        //console.log(this.trainers);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  async updateCoach() {
    let testForm = JSON.stringify(this.updateForm.value);
    this.trainersService
      .updateTrainer(this.trainerToUpdate._id, this.updateForm.value)
      .subscribe({
        next: (response: any) => {
          //this.trainers = response;
          //console.log(this.trainers);
        },
        error: (err) => {
          console.log(err);
        },
      });
    await this.getCoaches();
  }

  open(content: any, trainer: any) {
    this.trainerToUpdate = trainer;
    this.autoFillForm(trainer);
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

  private autoFillForm(trainer: any) {
    // Autofills the form with the coach to update.
    this.updateForm.setValue({
      coachName: trainer.coachName,
      coachUserName: trainer.coachUserName,
      coachPassword: trainer.coachPassword,
      coachBirth: trainer.coachBirth,
      coachWeight: trainer.coachWeight,
      coachHeight: trainer.coachHeight,
    });
  }
}
