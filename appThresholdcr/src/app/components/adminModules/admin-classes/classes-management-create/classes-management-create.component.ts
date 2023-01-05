import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { ClassesService } from '../../../../services/classes.service';
import { TrainersService } from '../../../../services/trainers.service';

@Component({
  selector: 'app-classes-management-create',
  templateUrl: './classes-management-create.component.html',
  styleUrls: ['./classes-management-create.component.css'],
})
export class ClassesManagementCreateComponent {
  classes = ['a', 'b', 'c', 'd', 'e'];
  coaches: any = ['a'];
  selectecCoach: any = '';
  startDate: any = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private classesService: ClassesService,
    private trainersService: TrainersService
  ) {}

  ngOnInit(): void {
    this.getCoaches();
  }
  registerForm = this.formBuilder.group({
    title: ['', Validators.required],
    type: ['', Validators.required],
    coachId: [0, Validators.required],
    date: ['', Validators.required],
    room: [0, Validators.required],
  });
  submit() {
    this.newClass(this.registerForm.value);
    this.router.navigate(['/classesSidenav']);
  }

  private newClass(classes: any) {}

  getCoaches() {
    this.trainersService.getTrainers().subscribe({
      next: (response: any) => {
        console.log('holaaaaaaaaaaaaaaaa');
        this.coaches = response;
        console.log(this.coaches);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createClass(coach: any, classType: any, date: any) {
    //let coachData = JSON.stringify(coach.value);
    console.log(coach.value);
    console.log(date.getDate);

    //this.registerForm.patchValue({ coachId: coach._id });

    //this.registerForm.get('type')?.setValue(classType);
    //this.registerForm.get('coachId')?.setValue(Number(coach));
    //this.registerForm.get('date')?.setValue(date);

    this.classesService.createClass(this.registerForm.value).subscribe(
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
