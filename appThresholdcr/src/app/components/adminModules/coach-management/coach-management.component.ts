import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import {TrainersService} from '../../../services/trainers.service';

@Component({
  selector: 'app-coach-management',
  templateUrl: './coach-management.component.html',
  styleUrls: ['./coach-management.component.css'],
})
export class CoachManagementComponent {
  constructor(private router: Router,private formBuilder: FormBuilder,private trainersService: TrainersService) {}
  registerForm=this.formBuilder.group({
    name: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    age: [Validators.required],
    weight: [Validators.required],
    height: ['', Validators.nullValidator],
  })
  submit() {
    this.newTrainer(this.registerForm.value);
    this.router.navigate(['/adminHome']);


  }
  newTrainer(trainer: any): void {
    this.trainersService.newTrainer(this.registerForm.value).subscribe(
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
