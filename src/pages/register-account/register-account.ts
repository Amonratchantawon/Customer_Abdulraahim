import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-account',
  templateUrl: 'register-account.html',
})
export class RegisterAccountPage {
  user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAccountPage');
  }

  onNext() {
    this.navCtrl.push('RegisterProfilePage', { provider: 'local', data: this.user });
  }

}
