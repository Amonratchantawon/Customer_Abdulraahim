import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Tabs } from 'ionic-angular';

/**
 * Generated class for the NavtabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navtabs',
  templateUrl: 'navtabs.html'
})
export class NavtabsPage {
  @ViewChild('tabs') tabs: Tabs

  homeRoot = 'HomePage';
  recommentedRoot = 'RecommentedPage';
  rewardRoot = 'RewardPage';
  statusRoot = 'StatusPage';
  moreRoot = 'MorePage';

  icon: string = './assets/icon/reward.svg';
  color: string = '#EB3841';
  constructor(public navCtrl: NavController) {
  }

  onReword() {
    this.tabs.select(2);
  }

  onSelectChange(e) {
    if (e.id === 't0-2') {
      this.color = '#b3222f';
    } else {
      this.color = '#EB3841';
    }
  }
}
