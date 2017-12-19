import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemHotpricesModel } from '../../assets/model/hotprice.model';

/*
  Generated class for the HotpriceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HotpriceProvider {

  constructor(public http: HttpClient) {
  }

  getHotpriceData(): Promise<Array<ItemHotpricesModel>> {
    return this.http.get('./assets/json/hotprice-list.json')
      .toPromise()
      .then(response => response as Array<ItemHotpricesModel>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
