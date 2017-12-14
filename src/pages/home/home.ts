import { PlaylistPage } from '../playlist/playlist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeProvider } from '../../providers/youtube/youtube';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [YoutubeProvider]
})
export class HomePage {

  channel = 'UC3ZkCd7XtUREnjjt3cyY_gg';
  datas:any;
  nextPageToken:any;

  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private youtube: YoutubeProvider
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

  

  // openPlaylist(id){
  //   alert(id);
  //   this.navCtrl.push(PlaylistPage, {id:id});
  // }


}
