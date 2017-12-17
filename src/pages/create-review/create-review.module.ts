import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateReviewPage } from './create-review';

@NgModule({
  declarations: [
    CreateReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateReviewPage),
  ],
})
export class CreateReviewPageModule {}
