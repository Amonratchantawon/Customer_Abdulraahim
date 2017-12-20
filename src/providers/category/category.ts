import { CategoryListModel } from '../../assets/model/category-list.model';
import { ItemCategoriyModel } from '../../assets/model/category-master.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CategoryProvider Provider');
  }

  getCategory(): Promise<Array<ItemCategoriyModel>> {
    return this.http.get('./assets/json/categorylist.json')
      .toPromise()
      .then(response => response as Array<ItemCategoriyModel>)
      .catch(this.handleError);
  }

  getListCategory(): Promise<Array<CategoryListModel>> {
    return this.http.get('./assets/json/shoplist-cate.json')
      .toPromise()
      .then(response => response as Array<CategoryListModel>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
 return Promise.reject(error.message || error);
  }

}
