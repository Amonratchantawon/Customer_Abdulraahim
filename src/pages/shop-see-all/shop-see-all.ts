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
    this.shopProvider.getShopData().then((data) => {
      this.shopData = data;
    }, (error) => {

    });
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.getShop();
      refresher.complete();
    }, 2000);
  }

  getItems(e) {
    if (e.keyCode == 13) {
      let activeElement = <HTMLElement>document.activeElement;
      activeElement && activeElement.blur && activeElement.blur();
    }
  }

  goToDetail(e){
    console.log(e);
  }

}
