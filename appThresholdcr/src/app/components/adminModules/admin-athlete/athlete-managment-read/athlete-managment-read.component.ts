import { Component } from '@angular/core';
import { AthleteService } from '../../../../services/athlete.service';

@Component({
  selector: 'app-athlete-managment-read',
  templateUrl: './athlete-managment-read.component.html',
  styleUrls: ['./athlete-managment-read.component.css'],
})
export class AthleteManagmentReadComponent {
  athletes: any = ['hola', 'hello', 'jirgort'];
  constructor(private athleteservice: AthleteService) {}
  ngOnInit(): void {
    this.getFuncionarios();
  }

  getFuncionarios() {
    this.athleteservice.getAthletes().subscribe({
      next: (response: any) => {
        this.athletes = response;
        //console.log(this.athletes);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
