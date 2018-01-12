import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopProvider } from '../../providers/shop/shop';
import { ItemShopModel } from '../../assets/model/shop.model';

/**
 * Generated class for the ShopSeeAllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-see-all',
  templateUrl: 'shop-see-all.html',
})
export class ShopSeeAllPage {
  shopData: Array<ItemShopModel> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public shopProvider: ShopProvider
  ) {
  }

  ionViewDidLoad() {
    this.getShop();
  }

  getShop() {
    let condition = this.navParams.data;
    this.shopProvider.getShopsByCondition(condition).then((data) => {
      this.shopData = data;
    }, (error) => {

    });
  }

  doRefresh(refresher) {
    this.getShop();
    setTimeout(() => {
      refresher.complete();
    }, 500);
  }

  goToDetail(e) {
    this.navCtrl.push('ShopPage', e._id);
  }

}
