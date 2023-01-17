import { Component } from '@angular/core';
import { ClassesService } from '../../../../services/classes.service';

@Component({
  selector: 'app-classes-management-delete',
  templateUrl: './classes-management-delete.component.html',
  styleUrls: ['./classes-management-delete.component.css'],
})
export class ClassesManagementDeleteComponent {
  allClasses: any = [];

  constructor(private classesService: ClassesService) {
    this.getClasses();
  }

  getClasses() {
    this.classesService.readClasses().subscribe({
      next: (response: any) => {
        this.allClasses = response;
        //console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteClass(event: any) {
    this.classesService.deleteClass(event._id).subscribe({
      next: (response: any) => {
        //this.allClasses = response;
        //console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
