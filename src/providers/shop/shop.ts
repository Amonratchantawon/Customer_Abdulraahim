import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemShopModel } from '../../assets/model/shop.model';

/*
  Generated class for the ShopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopProvider {

  constructor(public http: HttpClient) {
  }

  getShopData(): Promise<Array<ItemShopModel>> {
    return this.http.get('./assets/json/shoplist.json')
      .toPromise()
      .then(response => response as Array<ItemShopModel>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // this.log.errorService('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
