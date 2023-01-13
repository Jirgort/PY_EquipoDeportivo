import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  public userType: any;
  public userID: any;

  constructor() {}

  public setCurrentUser(userType: any, userID: any) {
    this.userType = userType;
    this.userID = userID;
  }

  public getCurrentUserType() {
    return this.userType;
  }
  public getCurrentUserID() {
    return this.userID;
  }
}
