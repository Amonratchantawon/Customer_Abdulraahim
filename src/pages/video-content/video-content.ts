import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the VideoContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-content',
  templateUrl: 'video-content.html',
})
export class VideoContentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoContentPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
