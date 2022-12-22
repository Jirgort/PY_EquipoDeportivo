import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-coach-management',
  templateUrl: './coach-management.component.html',
  styleUrls: ['./coach-management.component.css'],
})
export class CoachManagementComponent {
  constructor(private router: Router,private formBuilder: FormBuilder,) {}
  registerForm=this.formBuilder.group({
    nombre: ['', Validators.required],
    nameUser: ['', Validators.required],
    password: ['', Validators.required],
    age: [Validators.required],
    weight: [Validators.required],
    height: ['', Validators.nullValidator],
  })
  submit() {
    this.router.navigate(['/adminHome']);


  }
}
