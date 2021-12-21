import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'any'
})
export class AuthService {
  currentUser: any
  constructor() {
  }

  async isSignedIn(){
    try {
      await Auth.currentAuthenticatedUser()
      if(!this.currentUser){
        this.currentUser = await this.getUserInfo();
      }
      return true
    }
    catch {
      return false
    }
  }

  async getUsername(){
    return (await this.getUserInfo()).username
  }

  async getUserInfo(){
    return Auth.currentUserInfo();
  }

  async updateUserInfo(user: any, attributes: any){
    return await Auth.updateUserAttributes(user, attributes);
  }
}
