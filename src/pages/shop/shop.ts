import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopProvider } from '../../providers/shop/shop';
import { ShopModel } from '../../assets/model/shop.model';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  shopData: ShopModel = new ShopModel();
  isO: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public shop: ShopProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
    this.getShop();
  }

  getShop() {
    this.shop.getShopCenter().then((res) => {
      this.shopData = res;
      console.log(this.shopData);
      this.checkOpenShop();
    });
  }

  checkOpenShop() {
    if (this.shopData.isopen) {
      this.isO = 'เปิด';
    } else {
      this.isO = 'ปิด'
    }
  }

}
