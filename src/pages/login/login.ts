import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { User } from '../../providers/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: {email: string, password: string} = {
    email: 'test@example.org',
    password: 'test'
  };
  isLoading: Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public user: User, public toastCtrl: ToastController) {
  }

  doLogin() {
    this.isLoading = true;
    
    this.user.login(this.account).then(() => {
        //finish loading
        this.isLoading = false;

        //Load Profile afterwards
        this.navCtrl.setRoot(TabsPage);

    }, (err) => {
        // Unable to log in
        let toast = this.toastCtrl.create({
          message: err,
          duration: 3000,
          position: 'top'
        });
        toast.present();

        //finish loading
        this.isLoading = false;
    });
  }

}
