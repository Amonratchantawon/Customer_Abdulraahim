import { Component } from '@angular/core';
import { IonicPage, App, NavController } from 'ionic-angular';
import { ReviewModel } from '../../assets/model/review.model';
import { ReviewProvider } from '../../providers/review/review';
import { AuthProvider } from '../../providers/auth/auth';
import { UserModel } from '../../assets/model/user.model';
import { LoadingProvider } from '../../providers/loading/loading';
import { Constants } from '../../app/app.constants';

@IonicPage()
@Component({
  selector: 'page-recommented',
  templateUrl: 'recommented.html',
})
export class RecommentedPage {
  searchText: string = '';
  user: UserModel = new UserModel();
  dataReview: Array<ReviewModel>;
  constructor(
    public navCtrl: NavController,
    private reviewProvider: ReviewProvider,
    private app: App,
    private auth: AuthProvider,
    private loading: LoadingProvider,
  ) {
  }

  ionViewWillEnter() {
    this.auth.authenticated().then((res) => {
      if (res) {
        this.user = JSON.parse(window.localStorage.getItem('user@' + Constants.URL));
        this.getReview();
      } else {
        this.user = null;
        this.dataReview = [];
        this.navCtrl.push('LoginPage');
      }
    });
  }

  getReview() {
    this.loading.onLoading();
    setTimeout(() => {
      this.reviewProvider.getReviews().then(res => {
        this.dataReview = res;
        this.loading.dismiss();
      }).catch(err => {
        console.log(err);
        this.loading.dismiss();
      });
    }, 1000);
  }

  doRefresh(refresher) {
    this.getReview();
    refresher.complete();
  }

  goToProfile() {
    this.app.getRootNav().push('ProfilePage');
  }

  findShopReview() {
    this.app.getRootNav().push('FindShopReviewPage');
  }

}
