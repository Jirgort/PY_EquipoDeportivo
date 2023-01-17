import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainersService } from '../../../../services/trainers.service';

@Component({
  selector: 'app-coach-management-delete',
  templateUrl: './coach-management-delete.component.html',
  styleUrls: ['./coach-management-delete.component.css'],
})
export class CoachManagementDeleteComponent {
  trainers: any = ['hola', 'hello', 'jirgort'];

  constructor(private trainersService: TrainersService) {
    this.getCoaches();
  }

  ngOnInit() {
    this.getCoaches();
  }

  getCoaches() {
    this.trainersService.getTrainers().subscribe({
      next: (response: any) => {
        this.trainers = response;
        //console.log(this.trainers);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  async deleteCoach(coach: any) {
    this.trainersService.deleteTrainer(coach._id).subscribe({
      next: (response: any) => {
        //this.trainers = response;
        //console.log(this.trainers);
      },
      error: (err) => {
        console.log(err);
      },
    });
    await this.getCoaches();
  }
}
