import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { UserModel } from '../../assets/model/review.model';
import { Constants } from '../../app/app.constants';

@IonicPage()
@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html',
})
export class RewardPage {
  user: UserModel = new UserModel();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App
  ) {
  }

  ionViewWillEnter() {
    this.user = JSON.parse(window.localStorage.getItem('user@' + Constants.URL));
  }

  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  goToProfile() {
    this.app.getRootNav().push('ProfilePage');
  }


}
