import { YoutubeProvider } from '../../providers/youtube/youtube';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
  providers:[YoutubeProvider]
})
export class PlaylistPage {
  datas:any;
  nextPageToken:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private youtube: YoutubeProvider,
    private sanitizer:DomSanitizer
  ) {
    // youtube.playlistlist(navParams.data.id).subscribe(data =>{
    //   this.datas = data.json();
    //   if (data.json().nextPageToken) {
    //     this.nextPageToken = data.json().nextPageToken;
    //   }
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaylistPage');
  }

  // playVideo(videoId){
  //   return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+videoId);
  // }

}
