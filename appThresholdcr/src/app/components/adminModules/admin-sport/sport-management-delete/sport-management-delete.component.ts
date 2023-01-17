import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SportService } from '../../../../services/sport.service';

@Component({
  selector: 'app-sport-management-delete',
  templateUrl: './sport-management-delete.component.html',
  styleUrls: ['./sport-management-delete.component.css'],
})
export class SportManagementDeleteComponent {
  sports: any = ['hola', 'hello', 'jirgort'];

  constructor(private sportService: SportService) {
    this.getSport();
  }

  getSport() {
    this.sportService.getSports().subscribe({
      next: (response: any) => {
        this.sports = response;
        //console.log(this.sports);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteSport(sport: any) {
    this.sportService.deleteSport(sport._id).subscribe({
      next: (response: any) => {
        this.sports = response;
        //console.log(this.sports);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getSport();
  }
}
