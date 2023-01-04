import { Component } from '@angular/core';
import { TrainersService } from '../../../../services/trainers.service';
import { Validators, FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-coach-management-edit',
  templateUrl: './coach-management-edit.component.html',
  styleUrls: ['./coach-management-edit.component.css'],
})
export class CoachManagementEditComponent {
  trainers: any = ['hola', 'hello', 'jirgort'];
  closeResult = '';
  trainerToUpdate: any = ['trainer'];

  constructor(
    private formBuilder: FormBuilder,
    private trainersService: TrainersService,
    private modalService: NgbModal
  ) {}

  updateForm = this.formBuilder.group({
    name: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    age: ['', Validators.required],
    weight: ['', Validators.required],
    height: ['', Validators.required],
  });

  ngOnInit(): void {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.trainersService.getTrainers().subscribe({
      next: (response: any) => {
        console.log('holaaaaaaaaaaaaaaaa');
        this.trainers = response;
        console.log(this.trainers);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  test(name: string) {
    console.log('BUTTON WAS CLICKED FOR: ' + name);
  }

  updateCoach() {
    /*
    this.updateForm.setValue({
      name: 'Garp',
      userName: 'thehero',
      password: 'jajaxD',
      age: '78',
      weight: '102',
      height: '198',
    });
    */
    console.log('BUTTON WAS CLICKED FOR: ' + this.trainerToUpdate._id);
    let testForm = JSON.stringify(this.updateForm.value);
    console.log('THE DATA TO PASS IS: ' + this.updateForm.value);
    this.trainersService
      .updateTrainer(this.trainerToUpdate._id, this.updateForm.value)
      .subscribe({
        next: (response: any) => {
          console.log('********** TRAINER UPDATED **********');
          this.trainers = response;
          console.log(this.trainers);
        },
        error: (err) => {
          console.log('********** ERR: TRAINER NOT UPDATED **********');
          console.log(err);
        },
      });
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
      name: trainer.name,
      userName: trainer.userName,
      password: trainer.password,
      age: trainer.age,
      weight: trainer.weight,
      height: trainer.height,
    });
  }
}
