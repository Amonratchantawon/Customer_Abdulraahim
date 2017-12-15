import { HomeProvider } from '../../providers/home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeModel } from '../../assets/model/homeModel';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homeData: HomeModel = new HomeModel();
  pages: any = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public home: HomeProvider
  ) {

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad HomePage');
    this.getdata();
  }

  getdata() {
    this.home.getAds().then(data => {
      this.homeData = data;
    },(error)=>{
      
    })
  }

  onSelectedPage(index) { // selected category
    this.pages = index;
  }

}
