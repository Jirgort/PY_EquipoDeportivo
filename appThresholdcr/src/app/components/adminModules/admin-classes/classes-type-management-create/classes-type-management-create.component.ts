import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { ClassesService } from '../../../../services/classes.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-classes-type-management-create',
  templateUrl: './classes-type-management-create.component.html',
  styleUrls: ['./classes-type-management-create.component.css'],
})
export class ClassesTypeManagementCreateComponent {
  constructor(
    public datepipe: DatePipe,
    private router: Router,
    private formBuilder: FormBuilder,
    private classesService: ClassesService
  ) {}
  registerForm = this.formBuilder.group({
    type: ['', Validators.required],
  });

  submit() {
    this.newClassesType(this.registerForm.value);
    this.router.navigate(['/classesSidenav']);
  }

  newClassesType(event: any): void {
    this.classesService.newClassesType(event).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
