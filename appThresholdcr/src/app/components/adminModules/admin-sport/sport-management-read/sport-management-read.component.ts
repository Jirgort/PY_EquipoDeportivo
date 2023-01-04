import { Component } from '@angular/core';
import {SportService} from '../../../../services/sport.service';

@Component({
  selector: 'app-sport-management-read',
  templateUrl: './sport-management-read.component.html',
  styleUrls: ['./sport-management-read.component.css']
})
export class SportManagementReadComponent {
  Sports:any = ["hola","hello","jirgort"];
  constructor(private sportservice: SportService){
    
  }
  ngOnInit(): void {
    this.getFuncionarios();
  }
  
  getFuncionarios() {
    this.sportservice.getSports()
      .subscribe(
        {
          next: (response: any) => {
            console.log("entro" );
            this.Sports = response;
            console.log(this.Sports );
          },
          error: (err) => {
            console.log(err);
          }
        }
      );
  }
}