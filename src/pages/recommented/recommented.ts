import { ReviewModel } from '../../assets/model/review';
import { ReviewProvider } from '../../providers/review/review';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-recommented',
  templateUrl: 'recommented.html',
})
export class RecommentedPage {

  dataReview: Array<ReviewModel>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviewProvider: ReviewProvider) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad RecommentedPage');
    this.getReview();
  }

  getItems(e) {
    if (e.keyCode == 13) {
      let activeElement = <HTMLElement>document.activeElement;
      activeElement && activeElement.blur && activeElement.blur();
    }
  }

  getReview() {
    this.reviewProvider.getReviews().then(res => {
      console.log(res);
      this.dataReview = res;
    }).catch(err => {
      console.log(err);
    });
  }

  onLike() {
    console.log('like');
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.getReview();
      refresher.complete();
    }, 2000);
  }

}
