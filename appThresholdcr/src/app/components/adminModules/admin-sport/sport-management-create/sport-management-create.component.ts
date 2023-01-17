import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { SportService } from '../../../../services/sport.service';

@Component({
  selector: 'app-sport-management-create',
  templateUrl: './sport-management-create.component.html',
  styleUrls: ['./sport-management-create.component.css'],
})
export class SportManagementCreateComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private sportService: SportService
  ) {}

  registerForm = this.formBuilder.group({
    sportName: ['', Validators.required],
  });

  submit() {
    this.newSport(this.registerForm.value);
  }
  newSport(sport: any): void {
    this.sportService.newSport(this.registerForm.value).subscribe(
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
