import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryListPage } from './category-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CategoryListPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryListPage),
    ComponentsModule
  ],
})
export class CategoryListPageModule {}
