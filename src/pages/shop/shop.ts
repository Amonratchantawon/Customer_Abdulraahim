import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ShopProvider } from '../../providers/shop/shop';
import { ShopModel } from '../../assets/model/shop.model';
import { GalleryModal } from 'ionic-gallery-modal';

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
  category: any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public shop: ShopProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
    this.getShop();
  }

  onSelectedConditionCate(index) { // selected category
    this.category = index;
    console.log(this.category);
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

  showPhoto(index) {
    let photos = [];
    for (let i = 0; i < this.shopData.promoteimage.length; i++) {
      let element = this.shopData.promoteimage[i];
      photos.push({
        url: element,
        type: '.png',
      });
    }
    let modal = this.modalCtrl.create(GalleryModal, {
      photos: photos,
      initialSlide: index
    });
    modal.present();
  }

  selectCate(cate){
    console.log(cate._id);
  }
}
