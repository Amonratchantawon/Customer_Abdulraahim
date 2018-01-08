import { HttpClient } from '@angular/common/http';
//import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  API_URL: string = "https://eatsyd-test.herokuapp.com";
  user: any;

  constructor(public http: HttpClient, private local: Storage) {

  }

  public authenticated() {
    return tokenNotExpired();
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
      .then(response => response)
      .catch(this.handleError);
  }

  logout() {
    this.local.remove('token');
    this.user = null;
  }

  private loginSuccess(res) {
    this.local.set('token',res.loginToken)
    return res;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
