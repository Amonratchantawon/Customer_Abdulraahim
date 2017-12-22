import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageContentPage } from './image-content';
import { TranslateModule } from '@ngx-translate/core';

// import * as ionicGalleryModal from 'ionic-gallery-modal';
// import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ImageContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageContentPage),
    TranslateModule.forChild(),
  ],
})
export class ImageContentPageModule { }
