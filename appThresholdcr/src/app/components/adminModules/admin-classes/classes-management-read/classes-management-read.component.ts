import { Component } from '@angular/core';
import { ClassesService } from 'src/app/services/classes.service';

@Component({
  selector: 'app-classes-management-read',
  templateUrl: './classes-management-read.component.html',
  styleUrls: ['./classes-management-read.component.css'],
})
export class ClassesManagementReadComponent {
  allClasses: any = ['1', '2', '3'];
  enrollStatus = 'Matricular';
  enrollBtnClass = 'btn btn-success';

  constructor(private classService: ClassesService) {}

  ngOnInit(): void {
    this.getNews();
  }

  private getNews() {
    this.classService.readClasses().subscribe({
      next: (response: any) => {
        console.log('GETTIN CLASSES');
        this.allClasses = response;
        console.log(this.allClasses);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  enroll() {
    this.enrollStatus = 'Desmatricular';
    this.enrollBtnClass = 'btn btn-danger';
  }
}
