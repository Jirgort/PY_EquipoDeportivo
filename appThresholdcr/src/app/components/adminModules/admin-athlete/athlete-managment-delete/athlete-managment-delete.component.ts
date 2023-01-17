import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AthleteService } from '../../../../services/athlete.service';

@Component({
  selector: 'app-athlete-managment-delete',
  templateUrl: './athlete-managment-delete.component.html',
  styleUrls: ['./athlete-managment-delete.component.css'],
})
export class AthleteManagmentDeleteComponent {
  athletes: any = ['hola', 'dan', 'marc'];

  constructor(private athleteService: AthleteService) {
    this.getDeportistas();
  }

  getDeportistas() {
    this.athleteService.getAthletes().subscribe({
      next: (response: any) => {
        this.athletes = response;
        //console.log(this.athletes);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteAthletes(depor: any) {
    this.athleteService.deleteAthlete(depor._id).subscribe({
      next: (response: any) => {
        //this.athletes = response;
        //console.log(this.athletes);
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.getDeportistas();
  }
}
