import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HotpriceProvider } from '../../providers/hotprice/hotprice';
import { ItemHotpricesModel } from '../../assets/model/hotprice.model';

/**
 * Generated class for the HotpriceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotprice-list',
  templateUrl: 'hotprice-list.html',
})
export class HotpriceListPage {
  hotpriceData: Array<ItemHotpricesModel> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hotpriceProvider: HotpriceProvider
  ) {
  }

  ionViewDidLoad() {
    this.getHotprice();
  }

  getHotprice() {
    this.hotpriceProvider.getHotpriceData().then((data) => {
      this.hotpriceData = data;
    }, (error) => {

    });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.getHotprice();
      refresher.complete();
    }, 2000);
  }

  getItems(e) {
    if (e.keyCode == 13) {
      let activeElement = <HTMLElement>document.activeElement;
      activeElement && activeElement.blur && activeElement.blur();
    }
  }

}
