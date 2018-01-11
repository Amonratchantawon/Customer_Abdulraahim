import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-review',
  templateUrl: 'create-review.html',
})
export class CreateReviewPage {
  @ViewChild('myInput') myInput: ElementRef;
  review: any = {};
  maxLengthTitle: number = 30;
  maxLengthDetail: number = 150;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.review.image = this.navParams.get('image');
    this.review.title = this.navParams.get('title');
    this.review.detail = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateReviewPage');
  }

  createRevirw(){
    alert(JSON.stringify(this.review));
  }

}
