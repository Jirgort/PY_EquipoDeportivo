import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  public userType: any;
  public userID: any;
  public userName: any;

  constructor() {}

  public setCurrentUser(userType: any, userID: any, userName: any) {
    this.userType = userType;
    this.userID = userID;
    this.userName = userName;
  }

  public getCurrentUserName() {
    return this.userName;
  }
  public getCurrentUserType() {
    return this.userType;
  }
  public getCurrentUserID() {
    return this.userID;
  }
}
