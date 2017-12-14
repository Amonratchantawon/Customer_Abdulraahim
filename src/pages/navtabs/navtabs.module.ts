import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavtabsPage } from './navtabs';

@NgModule({
  declarations: [
    NavtabsPage,
  ],
  imports: [
    IonicPageModule.forChild(NavtabsPage),
  ]
})
export class NavtabsPageModule {}
