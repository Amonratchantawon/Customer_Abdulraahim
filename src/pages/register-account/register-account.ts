import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { TranslateService } from '@ngx-translate/core';
import { LoadingProvider } from '../../providers/loading/loading';

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    public alert: AlertProvider,
    private translate: TranslateService,
    public loading: LoadingProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAccountPage');
  }

  onNext() {
    this.loading.onLoading();
    this.auth.login(this.user).then((res) => {
      this.navCtrl.push('NavtabsPage');
      this.loading.dismiss();
    }).catch((err) => {
      if (err.message === 'Invalid password') {
        let language = this.translate.currentLang;
        if (language === 'th') {
          this.alert.onAlert('แจ้งเตือน', 'ชื่อบัญชีนี้มีผู้ใช้งานแล้ว', 'ตกลง');
        } else if (language === 'en') {
          this.alert.onAlert('Wraning', 'Username is already exists.', 'OK');
        }
      } else {
        this.navCtrl.push('RegisterProfilePage', { provider: 'local', data: this.user });
      }
      this.loading.dismiss();
    });
  }

}
