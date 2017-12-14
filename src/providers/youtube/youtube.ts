// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the YoutubeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YoutubeProvider {
  key = 'AIzaSyBjQr5QVnlYyeokHggb7N5iL2F-6ODCrTg';
  constructor(public http: Http) {
    console.log('Hello YoutubeProvider Provider');
  }

  playlist(channel) {
    return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=" + channel + "&key=" + this.key)
  }

  playlist_page(channel, pageToken) {
    return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=" + channel + "&pageToken" + pageToken + "&key=" + this.key)

  }

  playlistlist(playlistId){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlistItem?part=snippet&playlistId=" + playlistId + "&key=" + this.key)
    
  }
  playlistlist_page(playlistId, pageToken){
    return this.http.get("https://www.googleapis.com/youtube/v3/playlistItem?part=snippet&pageToken=" + pageToken + "&playlistId" + playlistId + "&key=" + this.key)
    
  }

}
