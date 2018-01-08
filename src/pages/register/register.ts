import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { TranslateService } from '@ngx-translate/core';
import { AlertProvider } from '../../providers/alert/alert';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: Facebook,
    public translate: TranslateService,
    public alert: AlertProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  onSkip() {
    this.navCtrl.push('NavtabsPage');
  }

  onFacebook() { //'user_birthday'
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => {
        this.fb.api('me?fields=id,first_name,last_name,email,birthday,gender,picture.width(300).height(300)', null).then((user) => {
          this.navCtrl.push('RegisterProfilePage', { provider: 'fb', data: user })
        })
          .catch(e => {
            if (this.translate.currentLang === 'th') {
              this.alert.onAlert('การเชื่อมต่อเฟสบุ๊ค', 'ผิดพลาด', 'ตกลง');
            } else if (this.translate.currentLang === 'en') {
              this.alert.onAlert('Facebook connect', 'Error logging into Facebook', 'OK');
            }
          })
      })
      .catch(e => { });

    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  onEmail() {
    this.navCtrl.push('RegisterAccountPage');
  }

}
