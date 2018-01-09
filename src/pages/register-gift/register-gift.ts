import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterGiftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-gift',
  templateUrl: 'register-gift.html',
})
export class RegisterGiftPage {
  inApp: Boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.inApp = this.navParams.data ? this.navParams.data.inApp : false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterGiftPage');
  }

  registerGift() {
    if (this.inApp) {
      // กรณีเข้ามาใน app แล้ว จะ pop กลับไปหน้าที่สั่งให้เปิด
      this.navCtrl.setRoot(window.localStorage.getItem('current_page_for_login'));
    } else {
      // กรณีเข้ามาครั้งแรก ไปหน้าแรก
      this.navCtrl.push('NavtabsPage');
    }
  }

}
