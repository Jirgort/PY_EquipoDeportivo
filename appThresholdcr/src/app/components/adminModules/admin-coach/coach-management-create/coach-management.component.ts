import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TrainersService } from '../../../../services/trainers.service';

@Component({
  selector: 'app-coach-management',
  templateUrl: './coach-management.component.html',
  styleUrls: ['./coach-management.component.css'],
})
export class CoachManagementComponent {
  message: MatSnackBar;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private trainersService: TrainersService,
    private messageSnackBar: MatSnackBar
  ) {
    this.message = messageSnackBar;
  }
  registerForm = this.formBuilder.group({
    coachName: ['', Validators.required],
    coachUserName: ['', Validators.required],
    coachPassword: ['', Validators.required],
    coachBirth: [Validators.required],
    coachWeight: [Validators.required],
    coachHeight: ['', Validators.nullValidator],
  });
  submit() {
    this.newTrainer(this.registerForm.value);
    //this.router.navigate(['/adminHome']);
  }
  newTrainer(trainer: any): void {
    console.log('DATA: ' + JSON.stringify(this.registerForm.value));
    this.trainersService.newTrainer(this.registerForm.value).subscribe(
      (res) => {
        //console.log(this.registerForm);
        localStorage.setItem('token', res.token);
        this.messageSnackBar.open('Entrenador creado satisfactoriamente.', 'OK!', {
          duration: 3000,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
