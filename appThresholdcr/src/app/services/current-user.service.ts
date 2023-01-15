import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  public userType: any;
  public userID: any;
  public userName: any;
  public userFullName: any;

  constructor() {}

  public setCurrentUser(userType: any, userID: any, userName: any) {
    this.userType = userType;
    this.userID = userID;
    this.userName = userName;

    localStorage.clear();
    localStorage.removeItem('userType');
    localStorage.setItem('userType', userType);
    localStorage.removeItem('userID');
    localStorage.setItem('userID', userID);
    localStorage.removeItem('userName');
    localStorage.setItem('userName', userName);
    //localStorage.removeItem('userFullName');
    localStorage.setItem(
      'userFullName',
      localStorage.getItem('userFullName') != null ? 'VAL' : 'NOVAL'
    );
  }
}
