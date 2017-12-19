import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { HomeProvider } from '../providers/home/home';
import { ReviewProvider } from '../providers/review/review';
import { HotpriceProvider } from '../providers/hotprice/hotprice';
import { ShopProvider } from '../providers/shop/shop';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeProvider,
    ReviewProvider,
    HotpriceProvider,
    ShopProvider
  ]
})
export class AppModule {}
