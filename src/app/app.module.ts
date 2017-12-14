import { HttpClientModule } from '@angular/common/http';
import { PlaylistPage } from '../pages/playlist/playlist';
import { MorePage } from '../pages/more/more';
import { StatusPage } from '../pages/status/status';
import { RewardPage } from '../pages/reward/reward';
import { RecommentedPage } from '../pages/recommented/recommented';

import { FormsModule } from '@angular/forms';
import { NavtabsPage } from '../pages/navtabs/navtabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { HomeProvider } from '../providers/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecommentedPage,
    RewardPage,
    StatusPage,
    MorePage,
    NavtabsPage,
    PlaylistPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NavtabsPage,
    HomePage,
    RecommentedPage,
    RewardPage,
    StatusPage,
    MorePage,
    PlaylistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlaylistPage,
    YoutubeVideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeProvider
  ]
})
export class AppModule {}
