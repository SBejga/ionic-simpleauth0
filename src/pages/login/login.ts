import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: {email: string, password: string} = {
    email: 'test@example.org',
    password: 'test'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doLogin() {
    this.navCtrl.setRoot(TabsPage);
  }

}
