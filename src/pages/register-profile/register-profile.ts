import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoadingProvider } from '../../providers/loading/loading';
// import { AlertProvider } from '../../providers/alert/alert';
import { TranslateService } from '@ngx-translate/core';

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
  inApp: Boolean = false;
  birthday: string;
  provider: string;
  user: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    private loading: LoadingProvider,
    private translate: TranslateService,
    private app: App
  ) {
    this.inApp = this.navParams.data ? this.navParams.data.inApp : false;
    this.provider = this.navParams.get('provider');
    if (this.provider === 'fb') {
      let fb_user = this.navParams.get('data');
      this.user.username = fb_user.username;
      this.user.password = fb_user.password;
      this.user.profileImageURL = fb_user.picture.data.url;
      this.user.firstName = fb_user.first_name;
      this.user.lastName = fb_user.last_name;
      this.user.gender = fb_user.gender;
      this.user.email = fb_user.email;
      this.birthday = fb_user.birthday ? new Date(fb_user.birthday).toISOString() : '';

    } else if (this.provider === 'local') {
      this.user = this.navParams.get('data');
      this.user.profileImageURL = 'https://eatsyd.herokuapp.com/modules/users/client/img/profile/default.png';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterProfilePage');
  }

  onRegister() {

    let date = new Date(this.birthday);
    // this.user.birthdate = date.getDate().toString();
    // this.user.birthmonth = (date.getMonth() + 1).toString();
    // this.user.birthyear = date.getFullYear().toString();
    this.user.dateOfBirth = date;
    this.loading.onLoading();
    this.auth.signup(this.user).then((res) => {
      this.app.getRootNav().push('RegisterGiftPage', { inApp: this.inApp });
      this.loading.dismiss();
    }).catch((err) => {
      let language = this.translate.currentLang;
      if (language === 'th') {
        // this.alert.onAlert('แจ้งเตือน', 'ชื่อบัญชีนี้มีผู้ใช้งานแล้ว', 'ตกลง');
      } else if (language === 'en') {
        // this.alert.onAlert('Wraning', 'Username is already exists.', 'OK');
      }
      this.loading.dismiss();
    });
  }

}
