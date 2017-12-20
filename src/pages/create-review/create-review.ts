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
  image: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateReviewPage');
  }

}
