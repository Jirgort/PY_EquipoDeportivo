import { Component } from '@angular/core';
import { ClassesService } from '../../../../services/classes.service';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-classes-type-management-delete',
  templateUrl: './classes-type-management-delete.component.html',
  styleUrls: ['./classes-type-management-delete.component.css'],
})
export class ClassesTypeManagementDeleteComponent {
  classTypes: any = ['hola', 'hello', 'jirgort'];
  private updateSubscription: any;

  constructor(
    private router: Router,
    private classesService: ClassesService,
    public currrentUser: CurrentUserService
  ) {
    this.getClassTypes();
  }

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getClassTypes();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
  }

  getClassTypes() {
    this.classesService.getClassesType().subscribe({
      next: (response: any) => {
        this.classTypes = response;
        //console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteClassesType(event: any) {
    this.classesService.deleteClassesType(event._id).subscribe({
      next: (response: any) => {
        //this.classTypes = response;
        //console.log(this.events);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getClassTypes();
  }
}
