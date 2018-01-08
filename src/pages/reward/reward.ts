import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { UserModel } from '../../assets/model/review.model';

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
    private app: App,
    private local: Storage,
  ) {
  }

  ionViewWillEnter() {
    this.local.get('user').then((user) => {
      this.user = user;
    });
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
