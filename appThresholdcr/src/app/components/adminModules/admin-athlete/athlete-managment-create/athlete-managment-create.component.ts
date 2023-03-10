import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { AthleteService } from '../../../../services/athlete.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-athlete-managment-create',
  templateUrl: './athlete-managment-create.component.html',
})
export class AthleteManagmentCreateComponent {
  message: MatSnackBar;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private athleteService: AthleteService,
    private messageSnackBar: MatSnackBar

  ) {
    this.message = messageSnackBar;
  }
  registerForm = this.formBuilder.group({
    athleteName: ['', Validators.required],
    athleteUserName: ['', Validators.required],
    athletePassword: ['', Validators.required],
    category: [[], Validators.required],
    athleteBirth: [Validators.required],
    athleteWeight: [Validators.required],
    athleteHeight: ['', Validators.nullValidator],
  });
  submit() {
    this.newAthlete(this.registerForm.value);
    //this.router.navigate(['/adminHome']);
  }
  newAthlete(athlete: any): void {
    this.athleteService.newAthlete(this.registerForm.value).subscribe(
      (res) => {
        console.log(this.registerForm);
        localStorage.setItem('token', res.token);
        this.messageSnackBar.open('Atleta creado satisfactoriamente.', 'OK!', {
          duration: 3000,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
