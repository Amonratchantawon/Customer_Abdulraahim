import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController, App } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { HomeModel } from '../../assets/model/home.model';
import { LoadingProvider } from '../../providers/loading/loading';
import { Constants } from '../../app/app.constants';
import { UserModel } from '../../assets/model/user.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('ads') ads: Slides;
  homeData: HomeModel = new HomeModel();
  user: UserModel = new UserModel();
  pages: any = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private home: HomeProvider,
    private modalCtrl: ModalController,
    private app: App,
    private loading: LoadingProvider
  ) {
  }

  ionViewWillEnter() {
    this.user = JSON.parse(window.localStorage.getItem('user@' + Constants.URL));
    this.getdata();
  }

  onSelectedPage(index) { // selected category
    this.pages = index;
  }

  getdata() {
    this.loading.onLoading();
    setTimeout(() => {
      this.home.getHomeData().then(data => {
        this.homeData = data;
        this.loading.dismiss();
      }, (error) => {
        this.loading.dismiss();
      })
    }, 1000);
  }

  doRefresh(refresher) {
    this.getdata();
    refresher.complete();
  }

  openAds(item) {
    console.log(item);
    if (item.isvideo === true) {
      let profileModal = this.modalCtrl.create('VideoContentPage', { userId: 8675309 });
      profileModal.present();
    } else {
      let profileModal = this.modalCtrl.create('ImageContentPage', { userId: 8675309 });
      profileModal.present();
    }
  }

  seeAllHotPrice() {
    this.app.getRootNav().push('HotpriceListPage');
  }

  seeAll(cate) {
    this.app.getRootNav().push('ShopSeeAllPage');
  }

  categoryPage(index, item) {
    this.app.getRootNav().push('CategoryListPage', { index: index, item: item });
  }

  goToProfile() {
    this.app.getRootNav().push('ProfilePage');
  }

}
