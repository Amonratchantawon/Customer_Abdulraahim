import { HomeModel } from '../../assets/model/homeModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HomeProvider Provider');
  }

  getAds(): Promise<HomeModel> {
    return this.http.get('./assets/json/home.json')
      .toPromise()
      .then(response => response as HomeModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // this.log.errorService('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
