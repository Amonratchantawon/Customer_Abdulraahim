import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController, App } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { HomeModel } from '../../assets/model/home.model';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('ads') ads: Slides;
  homeData: HomeModel = new HomeModel();
  pages: any = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public home: HomeProvider,
    public modalCtrl: ModalController,
    public app: App
  ) {

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad HomePage');
    this.getdata();
  }

  onSelectedPage(index) { // selected category
    this.pages = index;
  }

  getdata() {
    this.home.getHomeData().then(data => {
      this.homeData = data;
    }, (error) => {

    })
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.getdata();
      refresher.complete();
    }, 2000);
  }

  getItems(e) {
    if (e.keyCode == 13) {
      let activeElement = <HTMLElement>document.activeElement;
      activeElement && activeElement.blur && activeElement.blur();
    }
  }

  openAds() {
    // let profileModal = this.modalCtrl.create('VideoContentPage', { userId: 8675309 });
    // profileModal.present();
  }

  seeAllHotPrice() {
    this.app.getRootNav().push('HotpriceListPage');
  }

  seeAll(cate) {
    this.app.getRootNav().push('ShopSeeAllPage');
  }

  categoryPage(index,item){
    this.app.getRootNav().push('CategoryListPage',{ index: index,item:item});
  }

}
