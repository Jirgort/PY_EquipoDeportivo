import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  user={
    Nombre:'',
    Contracena:'',
    TypeUser:''
  }
  showAlert = false;
  showPassword = false;
  succesLogin = true;

  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {}
  signIn() {
    //console.log(this.user)
    this.loginService.signIn(this.user).subscribe(
      (res) => {
        console.log(this.user);
        localStorage.setItem('token', res.token);
        if(this.user.TypeUser=="Manager"){
          this.router.navigate(['/adminHome']);
        }
        if(this.user.TypeUser=="Trainer"){
          this.router.navigate(['/coach']);
        }
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
