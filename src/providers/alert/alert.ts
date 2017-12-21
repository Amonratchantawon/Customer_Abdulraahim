import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {
  }

  onShow(title, massage, button) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: massage,
      mode: 'ios',
      buttons: [button]
    });
    alert.present();
  }

}
