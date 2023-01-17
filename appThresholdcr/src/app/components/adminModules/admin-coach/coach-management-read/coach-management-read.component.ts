import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TrainersService } from '../../../../services/trainers.service';
@Component({
  selector: 'app-coach-management-read',
  templateUrl: './coach-management-read.component.html',
  styleUrls: ['./coach-management-read.component.css'],
})
export class CoachManagementReadComponent {
  trainers: any = ['hola', 'hello', 'jirgort'];
  constructor(private trainersService: TrainersService) {}

  ngOnInit(): void {
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
}
