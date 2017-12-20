import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app : App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  goToProfile(){
    this.app.getRootNav().push('ProfilePage');
  }

}
