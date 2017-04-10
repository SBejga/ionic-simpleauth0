import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any = {
    profile: {}
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.getProfile();
  }

  getProfile() {
    this.user.profile = {
      "email_verified": true,
      "email": "test@example.org",
      "clientID": "mAk3Qe8Lg7cO45DNyF2JsLP62v15HMQQ",
      "updated_at": "2017-04-05T12:21:15.204Z",
      "name": "test@example.org",
      "picture": "https://s.gravatar.com/avatar/a2bb6815df952aaaa71b89947f06e278?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
      "user_id": "auth0|58b16208522def4da1d00d3b",
      "nickname": "test",
      "identities": [],
      "created_at": "2017-02-25T10:52:56.572Z",
      "sub": "auth0|58b16208522def4da1d00d3b"
    };
  }

}
