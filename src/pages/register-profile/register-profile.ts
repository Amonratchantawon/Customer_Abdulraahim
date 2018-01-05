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
      let fb_user = this.navParams.get('data');
      this.user.profileImageURL = fb_user.picture.data.url;
      this.user.firstName = fb_user.first_name;
      this.user.lastName = fb_user.last_name;
      this.user.birthday = fb_user.birthday;
      this.user.gender = fb_user.gender;
      this.user.email = fb_user.email;
      this.user.username = fb_user.email;
      this.user.password = 'FB@pass1234';
    } else if (this.provider === 'local') {
      this.user = this.navParams.get('data');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterProfilePage');
  }

}
