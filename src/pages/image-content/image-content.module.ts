import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageContentPage } from './image-content';


@NgModule({
  declarations: [
    ImageContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageContentPage),
  ],
})
export class ImageContentPageModule {}
