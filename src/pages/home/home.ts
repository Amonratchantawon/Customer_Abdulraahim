import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { HomeModel } from '../../assets/model/homeModel';
import { HomeProvider } from '../../providers/home/home';
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
    public modalCtrl: ModalController
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

  seeAllHotprices() {

  }

}
