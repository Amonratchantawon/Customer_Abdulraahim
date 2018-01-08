import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Storage } from '@ionic/storage';

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

  login(credentials):Promise<any> {
    return this.http.post(this.API_URL + "/api/auth/signin", credentials)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  signup(credentials):Promise<any> {
    return this.http.post(this.API_URL + "/api/auth/signup", credentials)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  logout() {
    this.local.remove('token');
    this.user = null;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
