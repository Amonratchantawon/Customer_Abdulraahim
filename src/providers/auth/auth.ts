import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import { Constants } from '../../app/app.constants';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  API_URL: string = Constants.URL;
  user: any;

  constructor(
    public http: HttpClient,
    private local: Storage,
  ) {

  }

  public authenticated(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.local.get('token').then((token) => {
        resolve(tokenNotExpired('Bearer', token))
      });
    });
  }

  login(credentials) {
    return this.http.post(this.API_URL + "/api/auth/signin", credentials)
      .toPromise()
      .then(response => this.loginSuccess(response))
      .catch(this.handleError);
  }

  signup(credentials) {
    return this.http.post(this.API_URL + "/api/auth/signup", credentials)
      .toPromise()
      .then(response => this.registerSuccess(response))
      .catch(this.handleError);
  }

  logout() {
    this.local.remove('token');
    this.local.remove('user');
    this.user = null;
    console.log('logout');
  }

  private loginSuccess(res) {
    this.local.set('token', res.loginToken);
    this.local.set('user', res);
    return res;
  }

  private registerSuccess(res) {
    this.local.set('token', res.loginToken);
    this.local.set('user', res);
    return res;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.error || error);
  }

}
