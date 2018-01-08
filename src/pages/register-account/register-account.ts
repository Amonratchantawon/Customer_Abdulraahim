import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterAccountPage');
  }

  onNext() {
    this.auth.login(this.user).then((res)=> {
     //alert(res.loginToken);
     
    }).catch((err)=>{
      //alert(JSON.stringify(err));
    });
    //this.navCtrl.push('RegisterProfilePage', { provider: 'local', data: this.user });
  }

}
