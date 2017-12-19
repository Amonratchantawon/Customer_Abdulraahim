import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopSeeAllPage } from './shop-see-all';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ShopSeeAllPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopSeeAllPage),
    ComponentsModule
  ],
})
export class ShopSeeAllPageModule {}
