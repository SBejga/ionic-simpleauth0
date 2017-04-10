import { Injectable } from '@angular/core';
import { Auth } from './auth';
import 'rxjs/add/operator/map';

export interface IAuthUser {
    email: String,
    password: String
}

@Injectable()
export class User {
  token: String = null;
  profile: any = null;

  constructor(public auth: Auth) {}

  /**
   * Login of user
   * returns: Promise
   */
  login(account: IAuthUser) {
    return new Promise((resolve, reject) => {
      let seq = this.auth.login(account.email, account.password);
      seq.subscribe(res => {
          // If the API returned a successful response, mark the user as logged in
          if(res.access_token && res.token_type) {
            this.token = res.access_token;
            resolve();

          } else {
            console.log("login without token: ", res);
            reject("bad credentials");
          }
        }, err => {
          console.error('ERROR', err);
          reject("login failed");
        });
    });
  }

  /**
   * Use token to fetch profile
   */
  getProfile() {
    let seq = this.auth.getProfile(this.token);
    seq.subscribe(res => {
        this.profile = res;
      }, err => {
        console.error('ERROR', err);
      });

      return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this.token = null;
    this.profile = {};
  }

  /**
   * Check if loggedIn
   */
  isLoggedIn() {
    return (this.token != null);
  }
}