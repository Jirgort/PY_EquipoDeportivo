import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { TrainersService } from '../../services/trainers.service';
import { AthleteService } from '../../services/athlete.service';

import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    Nombre: '',
    Contracena: '',
    TypeUser: '',
  };
  userFullName = '';
  showAlert = false;
  showPassword = false;
  succesLogin = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public currentUser: CurrentUserService,
    private trainersService: TrainersService,
    private athleteService: AthleteService
  ) {}
  ngOnInit() {}
  signIn() {
    //console.log(this.user)
    this.loginService.signIn(this.user).subscribe(
      (res) => {
        console.log(this.user);
        localStorage.setItem('token', res.token);
        if (this.user.TypeUser == 'Admin') {
          console.log(
            'ADMIN TOKEN INFO IS: ' + JSON.stringify(jwt_decode(res.token))
          );
          let userID: any = jwt_decode(res.token);
          this.router.navigate(['/adminHome']);
          this.setLoggedInUser(
            this.user.TypeUser,
            userID._id,
            this.user.Nombre
          );
          console.log(
            'USER TYPE IS: ' +
              this.user.TypeUser +
              ' AND USER ID IS: ' +
              userID._id
          );
        } else if (this.user.TypeUser == 'Entrenador') {
          this.router.navigate(['/mainContent']);
          console.log(
            'COACH TOKEN INFO IS: ' + JSON.stringify(jwt_decode(res.token))
          );
          let userID: any = jwt_decode(res.token);
          this.setLoggedInUser(
            this.user.TypeUser,
            userID._id,
            this.user.Nombre
          );
          console.log(
            'USER TYPE IS: ' +
              this.user.TypeUser +
              ' AND USER ID IS: ' +
              userID._id
          );
        } else if (this.user.TypeUser == 'Atleta') {
          this.router.navigate(['/mainContent']);
          console.log(
            'ATHLETE TOKEN INFO IS: ' + JSON.stringify(jwt_decode(res.token))
          );
          let userID: any = jwt_decode(res.token);
          this.setLoggedInUser(
            this.user.TypeUser,
            userID._id,
            this.user.Nombre
          );
          console.log(
            'USER TYPE IS: ' +
              this.user.TypeUser +
              ' AND USER ID IS: ' +
              userID._id
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setLoggedInUser(userType: any, userID: any, userName: any) {
    if (userType == 'Admin') {
      localStorage.setItem('userFullName', 'Admin');
    } else if (userType == 'Entrenador') {
      this.getCoachFullName(userID);
    } else {
      this.getAthleteFullName(userID);
    }
    this.currentUser.setCurrentUser(userType, userID, userName);

    console.log(
      'USER TO LOGGED IN IS: ' +
        'TYPE: ' +
        userType +
        ' USERNAME: ' +
        userName +
        ' USER FULLNAME: ' +
        localStorage.getItem('userFullName')
    );
  }

  async getCoachFullName(id: any) {
    let coachName: any;
    this.trainersService.getTrainer(id).subscribe({
      next: async (response: any) => {
        coachName = response.name;
        console.log('COACH GOTTEN BY ID: ' + this.userFullName);
        this.userFullName = coachName;
        //localStorage.removeItem('userFullName');
        await localStorage.setItem('userFullName', this.userFullName);
      },
      error: (err) => {
        console.log(err);
      },
    });
    await localStorage.setItem('userFullName', this.userFullName);
  }

  async getAthleteFullName(id: any) {
    let athleteName: any;
    this.athleteService.getAthlete(id).subscribe({
      next: async (response: any) => {
        athleteName = response.name;
        this.userFullName = athleteName;
        console.log('ATHLETE GOTTEN BY ID: ' + this.userFullName);
        //localStorage.removeItem('userFullName');
        await localStorage.setItem('userFullName', this.userFullName);
      },
      error: (err) => {
        console.log(err);
      },
    });
    await localStorage.setItem('userFullName', this.userFullName);
  }
}
