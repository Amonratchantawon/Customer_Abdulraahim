import { CategoryListModel } from '../../assets/model/category-list.model';
import { ItemCategoriyModel } from '../../assets/model/category-master.model';
import { CategoryProvider } from '../../providers/category/category';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {

  categoryData:Array<ItemCategoriyModel>;
  shopByCate:Array<CategoryListModel>;
  pages: any = 0;
  index:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public categoryProvider:CategoryProvider) {
    this.index = this.navParams.get('index')
    console.log(this.index);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryListPage');
    this.getCate();
    this.getShopByCate();
  }

  getCate(){
    this.categoryProvider.getCategory().then(res=>{
      this.categoryData = res;

    // let scroll = document.getElementById('scroll');
    // scroll.scrollLeft = 1000 * this.index;
      console.log(this.categoryData);
    })
  }

  getShopByCate(){
    this.categoryProvider.getListCategory().then(res=>{
      this.shopByCate = res;
      console.log(this.shopByCate);
    });
  }

  onSelectedPage(index) { // selected category
    this.pages = index;
  }

  categoryPage(){
    
  }

}
