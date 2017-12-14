import { PlaylistPage } from '../playlist/playlist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';\

import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  channel = 'UC3ZkCd7XtUREnjjt3cyY_gg';
  datas:any;
  nextPageToken:any;

  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private youtubeVideoPlayer:YoutubeVideoPlayer
  ) {
    // youtube.playlist(this.channel).subscribe(data =>{
    //   this.datas = data.json().items;
    //   if (data.json().nextPageToken) {
    //     this.nextPageToken = data.json().nextPageToken;
    //   }
    // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  stopAuto() {

    this.slides.stopAutoplay();
    console.log("object");
  }

  

  openPlaylist(){
    this.youtubeVideoPlayer.openVideo('IG8V6GKFGtE');
  }


}
