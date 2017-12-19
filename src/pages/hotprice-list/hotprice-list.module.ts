import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotpriceListPage } from './hotprice-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HotpriceListPage,
  ],
  imports: [
    IonicPageModule.forChild(HotpriceListPage),
    ComponentsModule
  ],
})
export class HotpriceListPageModule { }
