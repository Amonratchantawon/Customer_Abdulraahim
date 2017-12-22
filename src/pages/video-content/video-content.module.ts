import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoContentPage } from './video-content';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VideoContentPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoContentPage),
    TranslateModule.forChild(),
  ],
})
export class VideoContentPageModule {}
