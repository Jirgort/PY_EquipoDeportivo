import { Component } from '@angular/core';
import { TrainersService } from '../../../../services/trainers.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-coach-management-edit',
  templateUrl: './coach-management-edit.component.html',
  styleUrls: ['./coach-management-edit.component.css'],
})
export class CoachManagementEditComponent {
  trainers: any = ['hola', 'hello', 'jirgort'];
  closeResult = '';
  coachName = '';
  coachUserName = '';
  coachPassword = '';
  coachAge = '0';
  coachWeight = '0';
  coachHeight = '0';

  constructor(
    private formBuilder: FormBuilder,
    private trainersService: TrainersService
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

  submit(coach: any) {
    this.updateCoach(coach);
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

  updateCoach(coach: any) {
    /*
    this.coachName = coach.name;
    this.coachUserName = coach.userName;
    this.coachAge = coach.age;
    this.coachWeight = coach.weight;
    this.coachHeight = coach.height;
    */
    this.updateForm.setValue({
      name: 'Garp',
      userName: 'thehero',
      password: 'jajaxD',
      age: '78',
      weight: '102',
      height: '198',
    });
    console.log('BUTTON WAS CLICKED FOR: ' + coach._id);
    let testForm = JSON.stringify(this.updateForm.value);
    console.log('THE DATA TO PASS IS: ' + this.updateForm.value);
    this.trainersService
      .updateTrainer(coach._id, this.updateForm.value)
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
}
