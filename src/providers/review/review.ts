
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewModel } from '../../assets/model/review.model';
import { ItemShopModel } from '../../assets/model/shop.model';


/*
  Generated class for the ReviewProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewProvider {

  constructor(public http: HttpClient) {
  }

  getReviews(): Promise<Array<ReviewModel>> {
    return this.http.get('./assets/json/review.json')
      .toPromise()
      .then(response => response as Array<ReviewModel>)
      .catch(this.handleError);
  }

  getShopNameReviews(): Promise<Array<ItemShopModel>> {
    return this.http.get('./assets/json/shoplist.json')
      .toPromise()
      .then(response => response as Array<ItemShopModel>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
