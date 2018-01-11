
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewModel } from '../../assets/model/review.model';
import { ItemShopModel } from '../../assets/model/shop.model';
import { Constants } from '../../app/app.constants';


/*
  Generated class for the ReviewProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewProvider {
  API_URL: string = Constants.URL;
  constructor(public http: HttpClient) {
  }

  getReviews(): Promise<Array<ReviewModel>> {
    return this.http.get('https://eatsyd-test.herokuapp.com/api/reviews')
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

  postReviews(review): Promise<ReviewModel> {
    return this.http.post('https://eatsyd-test.herokuapp.com/api/reviews', review)
      .toPromise()
      .then(response => response as ReviewModel)
      .catch(this.handleError);
  }

  like(review_id): Promise<ReviewModel> {
    return this.http.get('./assets/json/review.json/' + review_id)
      .toPromise()
      .then(response => response as ReviewModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
