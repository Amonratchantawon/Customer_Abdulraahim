import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageContentPage } from './image-content';

// import * as ionicGalleryModal from 'ionic-gallery-modal';
// import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ImageContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageContentPage),
  ],
})
export class ImageContentPageModule {}
