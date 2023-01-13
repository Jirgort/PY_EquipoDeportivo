import { Component } from '@angular/core';
import { ClassesService } from '../../../../services/classes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes-type-management-delete',
  templateUrl: './classes-type-management-delete.component.html',
  styleUrls: ['./classes-type-management-delete.component.css'],
})
export class ClassesTypeManagementDeleteComponent {
  events: any = ['hola', 'hello', 'jirgort'];

  constructor(private router: Router, private classesService: ClassesService) {
    this.getClasses();
  }

  getClasses() {
    this.classesService.getClassesType().subscribe({
      next: (response: any) => {
        console.log('holaaaaaaaaaaaaaaaa');
        this.events = response;
        console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteClassesType(event: any) {
    this.classesService.deleteClassesType(event._id).subscribe({
      next: (response: any) => {
        console.log('********** TRAINER DELETED **********');
        this.events = response;
        console.log(this.events);
      },
      error: (err) => {
        console.log('********** ERR: TRAINER NOT DELETED **********');
        console.log(err);
      },
    });
    this.getClasses();
  }
}
