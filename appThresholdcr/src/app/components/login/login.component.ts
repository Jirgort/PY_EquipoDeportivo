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
  showAlert = false;
  showPassword = false;
  succesLogin = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
    public currentUser: CurrentUserService
  ) {}
  ngOnInit() {}
  signIn() {
    //console.log(this.user)
    this.loginService.signIn(this.user).subscribe(
      (res) => {
        console.log(this.user);
        localStorage.setItem('token', res.token);
        if (this.user.TypeUser == 'Manager') {
          console.log(
            'ADMIN TOKEN INFO IS: ' + JSON.stringify(jwt_decode(res.token))
          );
          let userID: any = jwt_decode(res.token);
          this.router.navigate(['/adminHome']);
          this.setLoggedInUser(this.user.TypeUser, userID._id);
          console.log(
            'USER TYPE IS: ' +
              this.user.TypeUser +
              ' AND USER ID IS: ' +
              userID._id
          );
        } else if (this.user.TypeUser == 'Trainer') {
          this.router.navigate(['/coach']);
          console.log(
            'COACH TOKEN INFO IS: ' + JSON.stringify(jwt_decode(res.token))
          );
          let userID: any = jwt_decode(res.token);
          this.setLoggedInUser(this.user.TypeUser, userID._id);
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

  setLoggedInUser(userType: any, userID: any) {
    this.currentUser.setCurrentUser(userType, userID);
  }
}
