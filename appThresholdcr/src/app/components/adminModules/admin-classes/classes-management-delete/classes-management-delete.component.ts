import { Component } from '@angular/core';
import { ClassesService } from '../../../../services/classes.service';
import { interval } from 'rxjs';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-classes-management-delete',
  templateUrl: './classes-management-delete.component.html',
  styleUrls: ['./classes-management-delete.component.css'],
})
export class ClassesManagementDeleteComponent {
  allClasses: any = [];
  private updateSubscription: any;

  constructor(
    private classesService: ClassesService,
    public currrentUser: CurrentUserService
  ) {
    this.getClasses();
  }

  ngOnInit(): void {
    //this.getNews();
    this.updateSubs();
    this.refreshUserInfo();
  }

  updateSubs() {
    this.updateSubscription = interval(1000).subscribe((val) => {
      this.getClasses();
    });
  }

  refreshUserInfo() {
    this.currrentUser.setCurrentUser(
      localStorage.getItem('userType'),
      localStorage.getItem('userID'),
      localStorage.getItem('userName')
    );
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
