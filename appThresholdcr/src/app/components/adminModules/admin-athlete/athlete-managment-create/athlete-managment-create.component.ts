import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import {AthleteService} from '../../../../services/athlete.service';

@Component({
  selector: 'app-athlete-managment-create',
  templateUrl: './athlete-managment-create.component.html',
})

export class AthleteManagmentCreateComponent {
  constructor(private router: Router,private formBuilder: FormBuilder,private athleteService: AthleteService) {}
  registerForm=this.formBuilder.group({
    name: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    category: [[], Validators.required],
    age: [Validators.required],
    weight: [Validators.required],
    height: ['', Validators.nullValidator],
  })
  submit() {
    this.newAthlete(this.registerForm.value);
    this.router.navigate(['/adminHome']);


  }
  newAthlete(athlete: any): void {
    this.athleteService.newAthlete(this.registerForm.value).subscribe(
      (res) => {
        console.log(this.registerForm);
        localStorage.setItem('token', res.token);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}