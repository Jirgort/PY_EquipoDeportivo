import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { ClassesService } from '../../../../services/classes.service';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-classes-type-management-create',
  templateUrl: './classes-type-management-create.component.html',
  styleUrls: ['./classes-type-management-create.component.css'],
})
export class ClassesTypeManagementCreateComponent {
  message: MatSnackBar;
  constructor(
    public datepipe: DatePipe,
    private router: Router,
    private formBuilder: FormBuilder,
    private classesService: ClassesService,
    private messageSnackBar: MatSnackBar

  ) {
    this.message = messageSnackBar;
  }
  registerForm = this.formBuilder.group({
    classType: ['', Validators.required],
  });

  submit() {
    this.newClassesType(this.registerForm.value);
    //this.router.navigate(['/classesSidenav']);
  }

  newClassesType(event: any): void {
    this.classesService.newClassesType(event).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.messageSnackBar.open('Tipo de clase creado satisfactoriamente.', 'OK!', {
          duration: 3000,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
