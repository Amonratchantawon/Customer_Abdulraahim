import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { Base64 } from '@ionic-native/base64';
import { Camera } from '@ionic-native/camera';

import { HomeProvider } from '../providers/home/home';
import { ReviewProvider } from '../providers/review/review';
import { HotpriceProvider } from '../providers/hotprice/hotprice';
import { ShopProvider } from '../providers/shop/shop';
import { CategoryProvider } from '../providers/category/category';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    ImagePicker,
    Crop,
    Base64,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HomeProvider,
    ReviewProvider,
    HotpriceProvider,
    ShopProvider,
    CategoryProvider
  ]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}