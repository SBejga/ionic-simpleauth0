import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { User } from '../../providers/user';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public user: User, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    this.getProfile();
  }

  getProfile() {
    this.user.getProfile().subscribe((resp) => {
      //got profile
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'top'
      });
      toast.present();

      //401
      if (err.status == 401) {
        this.doLogout();
      }
    });
  }

  doLogout() {
    this.navCtrl.setRoot(LoginPage);
    this.user.logout();
  }

}
