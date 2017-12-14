import { MorePage } from '../more/more';
import { StatusPage } from '../status/status';
import { RewardPage } from '../reward/reward';
import { RecommentedPage } from '../recommented/recommented';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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

  homeRoot = HomePage
  recommentedRoot = RecommentedPage
  rewardRoot = RewardPage
  statusRoot = StatusPage
  moreRoot = MorePage


  constructor(public navCtrl: NavController) {}

}
