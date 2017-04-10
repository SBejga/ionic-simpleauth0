import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Auth0Config as Config } from '../config/auth0';

@Injectable()
export class Auth {
  url: String;

  constructor(public http: Http) {
    this.url = Config.AUTH0_DOMAIN;
  }

  login(user: String, pass: String) {
    let endpoint = "/oauth/ro";
    let body = {
      "client_id": Config.AUTH0_CLIENTID,
      "username": user,
      "password": pass,
      "connection": Config.AUTH0_CONNECTION,
      "grant_type": "password"
    };
    return this.http.post(this.url + endpoint, body).map(res => res.json());
  }

  getProfile(token: String) {
    let endpoint = "/userinfo";
    let query = "?access_token="+token;
    return this.http.get(this.url + endpoint + query).map(res => res.json());
  }

}