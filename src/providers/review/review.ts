
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewModel } from '../../assets/model/review.model';
import { ItemShopModel } from '../../assets/model/shop.model';
import { Constants } from '../../app/app.constants';
import { AuthProvider } from '../auth/auth';


/*
  Generated class for the ReviewProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReviewProvider {
  API_URL: string = Constants.URL;
  constructor(
    public http: HttpClient,
    public auth: AuthProvider
  ) {
  }

  getReviews(): Promise<Array<ReviewModel>> {
    return this.http.get(this.API_URL + '/api/getlistreview')
      .toPromise()
      .then(response => response as Array<ReviewModel>)
      .catch(this.handleError);
  }

  getShopNameReviews(): Promise<Array<ItemShopModel>> {
    return this.http.get(this.API_URL + '/api/getshopsname')
      .toPromise()
      .then(response => response as Array<ItemShopModel>)
      .catch(this.handleError);
  }

  postReviews(review): Promise<ReviewModel> {
    return this.http.post(this.API_URL + '/api/reviews', review)
      .toPromise()
      .then(response => response as ReviewModel)
      .catch(this.handleError);
  }

  like(review_id): Promise<ReviewModel> {
    return this.http.put(this.API_URL + '/api/islike/' + review_id, null)
      .toPromise()
      .then(response => response as ReviewModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
