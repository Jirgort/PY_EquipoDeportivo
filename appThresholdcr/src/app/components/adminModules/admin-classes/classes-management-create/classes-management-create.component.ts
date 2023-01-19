import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { ClassesService } from '../../../../services/classes.service';
import { TrainersService } from '../../../../services/trainers.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-classes-management-create',
  templateUrl: './classes-management-create.component.html',
  styleUrls: ['./classes-management-create.component.css'],
})
export class ClassesManagementCreateComponent {
  classes: any = ['a', 'b', 'c', 'd', 'e'];
  coaches: any = ['a'];
  coach: any;
  selectecCoach: any = '';
  startDate: any = '';
  type: any = '';
  message: MatSnackBar;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private classesService: ClassesService,
    private trainersService: TrainersService,
    private messageSnackBar: MatSnackBar

  ) {
    this.message = messageSnackBar;
  }

  ngOnInit(): void {
    this.getCoaches();
    this.getClassTypes();
  }
  registerForm = this.formBuilder.group({
    classTitle: ['', Validators.required],
    type: ['x', Validators.required],
    coachId: [0, Validators.required],
    classDate: ['', Validators.required],
    room: [0, Validators.required],
    athletes: [[], Validators.required],
  });
  submit() {
    this.newClass(this.registerForm.value);
    //this.router.navigate(['/classesSidenav']);
  }

  private newClass(classes: any) {}

  getCoaches() {
    this.trainersService.getTrainers().subscribe({
      next: (response: any) => {
        this.coaches = response;
        //console.log(this.coaches);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getClassTypes() {
    this.classesService.getClassesType().subscribe({
      next: (response: any) => {
        this.classes = response;
        //console.log(this.coaches);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createClass(coach: any, classType: any, date: any) {
    //let coachData = JSON.stringify(coach.value);
    //this.registerForm.patchValue({ coachId: coach._id })

    this.registerForm.get('type')?.setValue(classType.value);
    this.registerForm.get('coachId')?.setValue(coach.value);

    this.classesService.createClass(this.registerForm.value).subscribe(
      (res) => {
        //console.log(this.registerForm);
        localStorage.setItem('token', res.token);
        this.messageSnackBar.open('Clase creada satisfactoriamente.', 'OK!', {
          duration: 3000,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
