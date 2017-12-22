import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  displayName = "อมรรัตน์ จันทะวร";
  isenabled: boolean = true;
  Edit = "create";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  clicktogglr(users){
    if (this.Edit == "create") {
      // this.Edit = "checkbox-outline"
      if (this.isenabled == true) {
        this.isenabled = false;
      }
    } else if (this.Edit == "checkbox-outline") {
      // this.Edit = "create"
      if (this.isenabled == false) {
        this.isenabled = false;
      }
    }
  }
  save(){
    if (this.isenabled == true) {
      this.isenabled = false;
    }else  {
      this.isenabled = true;
    }
  }

  onToAddress(){
    this.navCtrl.push('AddressPage');
  }

}
