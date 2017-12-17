import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoContentPage } from './video-content';

@NgModule({
  declarations: [
    VideoContentPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoContentPage),
  ],
})
export class VideoContentPageModule {}
