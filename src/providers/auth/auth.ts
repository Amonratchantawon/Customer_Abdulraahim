import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import { Constants } from '../../app/app.constants';
import { AlertProvider } from '../alert/alert';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  API_URL: string = Constants.URL;

  constructor(
    public http: HttpClient,
    private local: Storage,
    private alert: AlertProvider
  ) {

  }

  authenticated(): Promise<any> {
    return new Promise((resolve, reject) => {
      //jigkoh3 change native storage to window.localStorage because just do same my team
      // this.local.get('token').then((token) => {
      //   resolve(tokenNotExpired('Bearer', token))
      // });

      var token = window.localStorage.getItem('token');
      resolve(tokenNotExpired('Bearer', token));
    });
  }

  login(credentials) {
    return this.http.post(this.API_URL + "/api/auth/signin", credentials)
      .toPromise()
      .then(response => this.loginSuccess(response))
      .catch(this.handleError);
  }

  getDailyWelcome() {
    let dailywelcome = [{
      title: 'ยินดีด้วย',
      description: 'โปรโมชั่นประจำวัน คุณได้รับ 1 coin',
      remark: 'หมายเหตุ: 1 วันต่อครั้งเท่านั้น',
      image: './assets/imgs/Home-Collect.png'
    }];
    this.showDailyWelcome(dailywelcome);
  }

  signup(credentials) {
    return this.http.post(this.API_URL + "/api/auth/signup", credentials)
      .toPromise()
      .then(response => this.registerSuccess(response))
      .catch(this.handleError);
  }

  logout() {
    window.localStorage.removeItem('user@' + this.API_URL);
    //jigkoh3 change native storage to window.localStorage because just do same my team
    //this.local.remove('token');
    window.localStorage.removeItem('token');
    console.log('logout');
  }

  private loginSuccess(res) {
    window.localStorage.setItem('user@' + this.API_URL, JSON.stringify(res));
    //jigkoh3 change native storage to window.localStorage because just do same my team
    //this.local.set('token', res.loginToken);
    window.localStorage.setItem('token' ,res.loginToken);
    return res;
  }

  private showDailyWelcome(dailywelcome) {
    dailywelcome.forEach(element => {
      this.alert.onAlert(element.title, element.description, 'ยืนยัน');
    });
  }

  private registerSuccess(res) {
    window.localStorage.setItem('user@' + this.API_URL, JSON.stringify(res));
    //jigkoh3 change native storage to window.localStorage because just do same my team
    //this.local.set('token', res.loginToken);
    window.localStorage.setItem('token' ,res.loginToken);
    return res;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.error || error);
  }

}
