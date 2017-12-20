import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RewardPage } from './reward';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RewardPage,
  ],
  imports: [
    IonicPageModule.forChild(RewardPage),
    TranslateModule.forChild()
  ],
})
export class RewardPageModule {}
