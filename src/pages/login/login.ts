import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { TranslateService } from '@ngx-translate/core';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    private alert: AlertProvider,
    private translate: TranslateService,
    private loading: LoadingProvider
  ) {
  }

  ionViewWillEnter() {
    this.auth.authenticated().then((res) => {
      if (res) {
        this.navCtrl.pop();
      }
    });
  }

  onLogin() {
    console.log(this.credentials);
    this.loading.onLoading();
    this.auth.login(this.credentials).then((res) => {
      this.navCtrl.pop();
      this.loading.dismiss();
    }).catch((err) => {
      if (err.message === 'Invalid password') {
        let language = this.translate.currentLang;
        if (language === 'th') {
          this.alert.onAlert('แจ้งเตือน', 'รหัสผ่านไม่ถูกต้อง', 'ตกลง');
        } else if (language === 'en') {
          this.alert.onAlert('Wraning', 'Invalid password.', 'OK');
        }
      } else if (err.message === 'Unknown user') {
        let language = this.translate.currentLang;
        if (language === 'th') {
          this.alert.onAlert('แจ้งเตือน', 'อีเมล์ไม่ถูกต้อง', 'ตกลง');
        } else if (language === 'en') {
          this.alert.onAlert('Wraning', 'Unknown user.', 'OK');
        }
      } else {
        let language = this.translate.currentLang;
        if (language === 'th') {
          this.alert.onAlert('แจ้งเตือน', 'เกิดข้อผิดพลาด กรุณาลองอีกครั้ง', 'ตกลง');
        } else if (language === 'en') {
          this.alert.onAlert('Wraning', 'Error! please try again', 'OK');
        }
      }
      this.loading.dismiss();
    });
  }

  goRegister() {
    this.navCtrl.push('RegisterPage', { inApp: true });
  }

}
