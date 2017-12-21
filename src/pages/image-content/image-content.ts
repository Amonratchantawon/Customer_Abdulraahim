import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { GalleryModal } from 'ionic-gallery-modal';
/**
 * Generated class for the ImageContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-content',
  templateUrl: 'image-content.html',
})
export class ImageContentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageContentPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  showPhoto(){
    let modal = this.modalCtrl.create(GalleryModal, {
      photos:[{ 
        url: './assets/imgs/hot_price/hotprice1.png', 
        type: '.png',
      },
      { 
        url: './assets/imgs/hot_price/hotprice2.png', 
        type: '.png',
      },
      { 
        url: './assets/imgs/hot_price/hotprice3.png', 
        type: '.png',
      },
      { 
        url: './assets/imgs/hot_price/hotprice4.png', 
        type: '.png',
      }],
      // closeIcon: 'Close',
      initialSlide: 1,
    });
    modal.present();
  }

}
