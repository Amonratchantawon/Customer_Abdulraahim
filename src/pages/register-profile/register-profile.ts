import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-profile',
  templateUrl: 'register-profile.html',
})
export class RegisterProfilePage {
  provider: string;
  user: any = {
    username: '',
    password: '',
    email: ''
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.provider = this.navParams.get('provider');
    if (this.provider === 'fb') {
      this.user = this.navParams.get('data');
      this.user.username = this.user.email;
      this.user.password = 'FB@pass1234';
      alert(JSON.stringify(this.user));
    } else if (this.provider === 'local') {
      this.user = this.navParams.get('data');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterProfilePage');
  }

}
