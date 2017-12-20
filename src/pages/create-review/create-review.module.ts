import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateReviewPage } from './create-review';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CreateReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateReviewPage),
    TranslateModule.forChild(),
  ],
})
export class CreateReviewPageModule {}
